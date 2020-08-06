import * as React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { storeData } from "../Storage";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  multiply,
} from "react-native-reanimated";
import { timing, useSpringTransition } from "react-native-redash";
import Button from "../Button";

// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import PopUp from "./PopUp";

let jwtDecode = require("jwt-decode");

WebBrowser.maybeCompleteAuthSession();

// Endpoint
/*
const discovery = {
    authorizationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/authorize',
    tokenEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/token',
    revocationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/revoke","jwks_uri":"https://oidc-ver1.difi.no/idporten-oidc-provider/jwk',
};
 */

const assets = [
  require("../../assets/Illustrations/idporten.png"),
];

const useProxy = true;

const redirectUri = AuthSession.makeRedirectUri({
  native: "digitalborger://redirect",
  useProxy,
});

export default function Login({ navigation }) {
  //const discovery = AuthSession.useAutoDiscovery('https://oidc-ver1.difi.no/idporten-oidc-provider/.well-known/openid-configuration');

  const discovery = {
    authorizationEndpoint:
      "https://oidc-ver1.difi.no/idporten-oidc-provider/authorize",
  };

  const getToken = async (code) => {
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append(
      "Authorization",
      "Basic " +
        Base64.btoa("digdircamp_oidc:c72e9529-dde3-4e3b-be38-cd0a164250a0")
    );

    await (async () => {
      const rawResponse = await fetch(
        "https://oidc-ver1.difi.no/idporten-oidc-provider/token",
        {
          method: "POST",
          headers: headers,
          body: "grant_type=authorization_code&code=" + code,
        }
      );
      const content = await rawResponse.json();

      //Stores access token in localstorage
      await storeData("access_token", content.access_token);

      //Transforms the jwt token to json
      let id_token = content.id_token;
      let pid = jwtDecode(id_token);

      //Stores the personal identifier number (Personnummer)
      await storeData("pid", pid.pid);
    })();
  };

  // Create and load an auth request
  const [request, result, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Code,
      clientId: "digdircamp_oidc",
      //scopes: ["openid profile"],
      scopes: ["openid", "profile"],
      //responseType: "code",
      usePKCE: false,
      state: "abcd", //randome
      // codeChallenge: "1234", //randomes
      redirectUri,
    },
    discovery
  );

  React.useEffect(() => {
    if (result?.type === "success") {
      const code = result.params.code;
      getToken(code)
        .then(() => navigation.navigate("ScreenTabs"))
        .catch((err) => console.log(err));
    }
  }, [result]);

  const value = timing({
    duration: 200,
    from: 0,
    to: 1,
    easing: Easing.linear,
  });

  const transition = useSpringTransition(value);

  const scale = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });


  const [show, setShow] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <PopUp
        pressed={show}
        parentCallback={(item) => {
          setShow(item);
        }}
      />

      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 25, letterSpacing: 0.1 }}>
          Velkommen til ID-porten
        </Text>
        <Text
          style={{
            fontStyle: "italic",
            fontSize: 20,
            marginTop: 10,
            color: "#666666",
            letterSpacing: 0.1,
          }}
        >
          - Vi er til for din sikkerhet
        </Text>
      </View>
      <Animated.View
        style={{ transform: [{ scale }], flex: 1, justifyContent: "center" }}
      >
        <Image
          source={assets[0]}
          style={{ width: "75%", height: "75%", alignSelf: "center" }}
          resizeMode={"contain"}
        />
      </Animated.View>

      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 40,
          marginLeft: 40,
        }}
      >
        <Text style={{ letterSpacing: 0.1, fontSize: 16 }}>
          Gjennom oss har du mulighet til å logge inn på hvilken som helst
          offentlige tjeneste. Hvor kult er ikke det!
        </Text>
      </View>

      <View style={{ flex: 0.7 }}>
        <View
          style={{
            flex: 2,
            backgroundColor: "#E18E76",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 55,
            borderTopRightRadius: 55,
            paddingTop: 20,
          }}
        >
          <Button
            onPress={() => promptAsync({ useProxy })}
            variant={"default"}
            label={"Login"}
          />
          <TouchableOpacity onPress={() => setShow(true)}>
            <Text
              style={{
                color: "white",
                textDecorationLine: "underline",
                letterSpacing: 0.1,
                marginTop: 20,
              }}
            >
              Opprett minID
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const Base64 = {
  btoa: (input: string = "") => {
    let str = input;
    let output = "";

    for (
      let block = 0, charCode, i = 0, map = chars;
      str.charAt(i | 0) || ((map = "="), i % 1);
      output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
    ) {
      charCode = str.charCodeAt((i += 3 / 4));

      if (charCode > 0xff) {
        throw new Error(
          "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
        );
      }

      block = (block << 8) | charCode;
    }

    return output;
  },

  atob: (input: string = "") => {
    let str = input.replace(/=+$/, "");
    let output = "";

    if (str.length % 4 == 1) {
      throw new Error(
        "'atob' failed: The string to be decoded is not correctly encoded."
      );
    }
    for (
      let bc = 0, bs = 0, buffer, i = 0;
      (buffer = str.charAt(i++));
      ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  },
};

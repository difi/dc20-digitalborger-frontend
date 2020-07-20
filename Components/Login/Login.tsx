import * as React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from "expo-auth-session";
import {ResponseType, useAuthRequest} from "expo-auth-session";
import {storeData} from "../Storage";
import Animated, {Easing, Extrapolate, interpolate} from "react-native-reanimated";
import {timing, useSpringTransition} from "react-native-redash";
import {useEffect} from "react";
import Button from "../Button";

// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';

let jwtDecode = require('jwt-decode');

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
]

const useProxy = true;

const redirectUri = AuthSession.makeRedirectUri({
    native: 'digitalborger://redirect',
    useProxy,
});

export default function Login({navigation}) {
    //const discovery = AuthSession.useAutoDiscovery('https://oidc-ver1.difi.no/idporten-oidc-provider/.well-known/openid-configuration');

    const discovery = {
        authorizationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/authorize',
    };

     const getToken = async (code) => {
         console.log("Requesting token from code", code);
         console.log("redirect_uri", redirectUri);
         console.log("Code", code);

         let headers = new Headers();
         headers.append( 'Content-Type', 'application/x-www-form-urlencoded');
         headers.append("Authorization", "Basic " + Base64.btoa("digdircamp_oidc:c72e9529-dde3-4e3b-be38-cd0a164250a0"));


         await (async () => {
             const rawResponse = await fetch('https://oidc-ver1.difi.no/idporten-oidc-provider/token', {
                 method: 'POST',
                 headers: headers,
                 body: 'grant_type=authorization_code&code=' + code,
             });
             const content = await rawResponse.json();

             console.log("full content", content);
             console.log("Token", content.access_token);
             //Stores access token in localstorage
             await storeData("access_token", content.access_token);

             //Transforms the jwt token to json
             let id_token = content.id_token;
             let pid = jwtDecode(id_token);

             //Stores the personal identifier number (Personnummer)
             await storeData("pid", pid.pid);
         })();
    }

    // Create and load an auth request
    const [request, result, promptAsync] = useAuthRequest(
        {
            responseType: ResponseType.Code,
            clientId: 'digdircamp_oidc',
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
        if (result?.type === 'success') {
            const code = result.params.code;
            getToken(code)
                .then(() => navigation.navigate("ScreenTabs"))
                .catch(err => console.log(err))

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
         inputRange: [0,1],
         outputRange: [0,1]
     });

     const opacity = interpolate(value,
         {
             inputRange: [0,1],
             outputRange: [0.5,1]
         });


    return (
       <View style={{flex: 1, backgroundColor: "white"}}>
           <View style={{flex: 0.5, justifyContent: "center", alignItems: "center", marginTop: 40}}>
               <Text style={{fontWeight: "bold", fontSize: 25, letterSpacing: 0.6}}>
                   Velkommen til ID-porten
               </Text>
               <Text style={{fontStyle: "italic", fontSize: 20, marginTop: 10, color: "#666666", letterSpacing: 0.6}}>
                   - Vi er til for din sikkerhet
               </Text>
           </View>
           <Animated.View style={{transform: [{scale}], flex: 1, justifyContent: "center"}}>
               <Image source={assets[0]} style={{width: "75%", height: "75%", alignSelf: "center",}} resizeMode={"contain"}/>
           </Animated.View>

           <View style={{flex: 0.5, justifyContent: "center", alignItems: "center", marginRight: 40, marginLeft: 40}}>
               <Text style={{letterSpacing: 0.6}}>
                   Gjennom oss har du mulighet til å logge in på hvilken som helst offentlige tjeneste. Hvor kult er ikke det!
               </Text>
           </View>

           <View style={{flex: 0.7, alignItems: "center", backgroundColor: "#5CB6B0", borderTopLeftRadius: 65, borderTopRightRadius: 65,
               shadowColor: "#000",
               shadowOffset: {
                   width: 0,
                   height: 2,
               },
               shadowOpacity: 0.3,
               shadowRadius: 3,

               }}>

                   <View style={{flex: 1, marginTop: 40, marginBottom: 30}}>
                       <Button onPress={() => promptAsync({ useProxy })}  variant={"default"} label={"Login"}/>
                   </View>
                   <View style={{flex: 2, flexDirection: "row"}}>
                       <Text style={{color: "white", marginRight: 10, textDecorationLine: "underline", letterSpacing: 0.6}}>
                            Opprett minID
                       </Text>
                   </View>
               <TouchableOpacity onPress={() => navigation.goBack()} style={{alignSelf: "flex-start", marginLeft: 20, marginBottom: 20, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                   <FontAwesome name={"arrow-circle-left"} color={"white"} size={25} />
                   <Text style={{color: "white", fontWeight: "bold", marginLeft: 10}}>
                       Tilbake
                   </Text>
               </TouchableOpacity>

           </View>
       </View>
    );
}

/*
  <View style={{flex: 1, paddingRight: 20, paddingLeft: 20}}>
           <Animated.View style={{opacity, flex: 1, justifyContent: "center", alignItems: "center", }}>
               <Image source={assets[0]} style={{width: "75%", height: "75%", alignSelf: "center",}} resizeMode={"contain"}/>
           </Animated.View>
           <View style={{ flex: 1, alignItems: 'center' }}>
               <TouchableOpacity disabled={!request} onPress={() => promptAsync({ useProxy })} style={{backgroundColor: "#6064E5", height: 50, width: "70%", borderRadius: 10, justifyContent: "center", alignItems: "center"}}>
                   <Text style={{fontWeight: "bold", fontSize: 20, textTransform: "uppercase", color: "white"}}>
                       login
                   </Text>
               </TouchableOpacity>

               {result && <Text>{JSON.stringify(result, null, 2)}</Text>}
           </View>
       </View>
 */











const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const Base64 = {
    btoa: (input:string = '')  => {
        let str = input;
        let output = '';

        for (let block = 0, charCode, i = 0, map = chars;
             str.charAt(i | 0) || (map = '=', i % 1);
             output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

            charCode = str.charCodeAt(i += 3/4);

            if (charCode > 0xFF) {
                throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            }

            block = block << 8 | charCode;
        }

        return output;
    },

    atob: (input:string = '') => {
        let str = input.replace(/=+$/, '');
        let output = '';

        if (str.length % 4 == 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (let bc = 0, bs = 0, buffer, i = 0;
             buffer = str.charAt(i++);

             ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
             bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
        ) {
            buffer = chars.indexOf(buffer);
        }

        return output;
    }
};

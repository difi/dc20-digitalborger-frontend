import * as React from 'react';
import {View, Text, Button, StyleSheet, Platform, TouchableOpacity, Dimensions} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as AuthSession from "expo-auth-session";
import {makeRedirectUri, ResponseType, useAuthRequest} from "expo-auth-session";
import * as Linking from 'expo-linking'
import Axios from "axios";
import {storeData} from "../Storage";
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

const useProxy = true;

const redirectUri = AuthSession.makeRedirectUri({
    native: 'digitalborger://redirect',
    useProxy,
});

console.log(redirectUri)
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

         console.log("BASE64", Base64.btoa("digdircamp_oidc:c72e9529-dde3-4e3b-be38-cd0a164250a0"));


         await (async () => {
             const rawResponse = await fetch('https://oidc-ver1.difi.no/idporten-oidc-provider/token', {
                 method: 'POST',
                 headers: headers,
                 body: 'grant_type=authorization_code&code=' + code,
             });
             const content = await rawResponse.json();

             console.log("full content", content);
             console.log("Token", content.access_token);
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
            console.log("test", result);
            const code = result.params.code;
            const state = result.params.state;
            getToken(code).catch(err => console.log(err))
                .then(() => navigation.navigate("ScreenTabs"))

        } else {
            alert("error!");
        }
    }, [result]);

    return (
       <View style={{flex: 1, paddingRight: 20, paddingLeft: 20}}>
           <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontWeight: "bold", fontSize: 20, textTransform: "uppercase"}}>
                    Digital borger
                </Text>
           </View>
           <View style={{ flex: 1, alignItems: 'center' }}>
               <TouchableOpacity disabled={!request} onPress={() => promptAsync({ useProxy })} style={{backgroundColor: "#6064E5", height: 50, width: "70%", borderRadius: 10, justifyContent: "center", alignItems: "center"}}>
                   <Text style={{fontWeight: "bold", fontSize: 20, textTransform: "uppercase", color: "white"}}>
                       login
                   </Text>
               </TouchableOpacity>

               {result && <Text>{JSON.stringify(result, null, 2)}</Text>}
           </View>
       </View>
    );
}













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

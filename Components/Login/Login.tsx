import * as React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as AuthSession from "expo-auth-session";
import {makeRedirectUri, useAuthRequest} from "expo-auth-session";
import * as Linking from 'expo-linking'
import Axios from "axios";


/*
1. If the app is already open, the app is foregrounded and a Linking event is fired
You can handle these events with ------> Linking.addEventListener('url', callback).

2. If the app is not already open, it is opened and the url is passed in as the initialURL
You can handle these events with  -------> Linking.getInitialURL -- it returns a Promise that resolves to the url, if there is one.
 */



WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
    authorizationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/authorize',
    tokenEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/token',
    revocationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/revoke","jwks_uri":"https://oidc-ver1.difi.no/idporten-oidc-provider/jwk',
};

const useProxy = true;

const redirectUri = AuthSession.makeRedirectUri({
    native: 'digitalborger://redirect',
    useProxy,
});
export default function Login({navigation}) {
    //const discovery = AuthSession.useAutoDiscovery('https://oidc-ver1.difi.no/idporten-oidc-provider/.well-known/openid-configuration');

    const discovery = {
        authorizationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/authorize',
        tokenEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/token',
        revocationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/revoke","jwks_uri":"https://oidc-ver1.difi.no/idporten-oidc-provider/jwk',
    };

     const getToken = async (code) => {
      /*
        await fetch('https://oidc-ver1.difi.no/idporten-oidc-provider/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=authorization_code&redirect_uri=' + redirectUri + '&code=' + code,
        }).then(item => console.log("item", item))
            .catch(err => console.log(err));

       */
         console.log("Requesting token from code", code);
         console.log("redirect_uri", redirectUri);
         console.log("Code", code);

         let headers = new Headers();
         headers.append( 'Content-Type', 'application/x-www-form-urlencoded');
         headers.append("Authorization", "Basic " + Base64.btoa("digdircamp_oidc:c72e9529-dde3-4e3b-be38-cd0a164250a0"));

         await fetch('https://oidc-ver1.difi.no/idporten-oidc-provider/token', {
             method: "POST",
             headers: headers,
                 body: 'grant_type=authorization_code&redirect_uri=' + redirectUri + '&code=' + code,
             // body: 'grant_type=authorization_code&redirect_uri=digitalborger://redirect&code=' + code,
         },
             )
             .then(response => {
                 //if (!response.ok) throw new Error(response.status);
                 console.log("response", response.json())
                 //return response.json();
             })
             .catch(err => console.log(err));




      /*
         await Axios.post('https://oidc-ver1.difi.no/idporten-oidc-provider/token', {
             body: 'grant_type=authorization_code&redirect_uri=' + redirectUri + '&code=' + code,
         }, {
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
             },
             auth: {
                 username: 'digdircamp_oidc',
                 password: 'c72e9529-dde3-4e3b-be38-cd0a164250a0'
             }
         }).then(response => console.log(Base64.btoa(JSON.stringify(response))))
             .catch(err => console.log(err))
       */

    }

    // Create and load an auth request
    const [request, result, promptAsync] = AuthSession.useAuthRequest(
        {
            clientId: 'digdircamp_oidc',
            scopes: ["openid profile"],
            responseType: "code",
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
            const state = result.params.state;
            getToken(code).catch(err => console.log(err))

        } else {
            alert("error!");
        }
    }, [result]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Login!" disabled={!request} onPress={() => promptAsync({ useProxy })} />
            {result && <Text>{JSON.stringify(result, null, 2)}</Text>}
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

import * as React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as AuthSession from "expo-auth-session";
import {makeRedirectUri, useAuthRequest} from "expo-auth-session";
import * as Linking from 'expo-linking'

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

const useProxy = Platform.select({ web: false, default: true })

export default function Login({navigation}) {

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: 'digdircamp_oidc',
            scopes: ["openid profile"],
            responseType: "code",
            usePKCE: true,
            state: "abcd", //randome
            codeChallenge: "1234", //randome
            // For usage in managed apps using the proxy
            //redirectUri: "digitalborger://redirect",
            redirectUri: makeRedirectUri({
                useProxy,
                //native: "digitalborger://redirect"
            })
        },
        discovery
    );



    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
        } else {
            console.log("fan", response)
            const prefix = Linking.makeUrl("digitalborger://redirect");
            console.log("test", prefix)

            let redirectUrl = AuthSession.getRedirectUrl();
            console.log("redirectUrl", redirectUrl)

            console.log("fan", useProxy)
        }
    }, [response]);

    async function OpenWebPage() {
        let result = await WebBrowser.openBrowserAsync("https://www.digdir.no/");
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button title={"Home"} onPress={() => navigation.navigate("ScreenTabs")}/>
            <Button title={"Open webbrowser"} onPress={OpenWebPage}/>
            <Button
                disabled={!request}
                title="Login"
                onPress={() => {
                    promptAsync();
                    console.log("request", request);
                }}
            />

            <Button
                title="Fuck dæ"
                onPress={() => {
                    WebBrowser.openAuthSessionAsync("https://oidc-ver1.difi.no/idporten-oidc-provider/authorize?code_challenge=SpMuQJlJw9dRqdy8S5RiY_CCCGBNuFpTjY0_SdNuYe4&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40jorho%2Fdc20-digitalborger-frontend&client_id=digdircamp_oidc&response_type=code&state=abcd&scope=openid%20profile"
                        , "https://auth.expo.io/@jorho/dc20-digitalborger-frontend"). catch(err => console.log(err))
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({

});

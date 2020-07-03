import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as AuthSession from "expo-auth-session";
import {makeRedirectUri, useAuthRequest} from "expo-auth-session";


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
            redirectUri: "digitalborger://redirect",
        },
        discovery
    );

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
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
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({

});

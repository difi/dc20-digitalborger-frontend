import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Login({navigation}) {
    async function OpenWebPage() {
        let result = await WebBrowser.openBrowserAsync("https://www.digdir.no/");
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button title={"Home"} onPress={() => navigation.navigate("ScreenTabs")}/>
            <Button title={"Open webbrowser"} onPress={OpenWebPage}/>
        </View>
    );
}


const styles = StyleSheet.create({

});

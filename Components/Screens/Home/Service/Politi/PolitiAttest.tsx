import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";
import Button from "../assets/Button";




export default function PolitiAttest() {
    return (


            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={{ fontWeight: "bold", fontSize: 17}}>NB! Før du søker politiattest:</Text>
                </View>
                <View style={styles.textContainer}>
                        <Text style={{fontSize: 15}}>{'\u30FB'}Du kan bare søke om politiattest for deg selv.</Text>
                </View>
                <View style={styles.textContainer}>
                        <Text style={{fontSize: 15}}>{'\u30FB'}En politiattest er kun gylding i tre måneder</Text>
                </View>
                <View style={styles.textContainer}>
                        <Text style={{fontSize: 15}}>{'\u30FB'}Er du under 18 år må foresatt også skrive under.</Text>
                </View>
                <View style={styles.buttonContainer}>
                <Button label={"Søk om politiattest"} color={"#222A3A"} onPress={() =>
                    WebBrowser.openBrowserAsync(
                    "https://attest.politiet.no/web/"
                )} textColor={"white"}/>
                </View>
            </View>

);
}


const styles = StyleSheet.create({

    container:{
    },
    textContainer:{
        marginTop: 15,
        marginLeft: 5,
    },
    buttonContainer:{
        margin: "10%",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
    },
});

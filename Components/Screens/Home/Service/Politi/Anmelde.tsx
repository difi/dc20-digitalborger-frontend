import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import Button from "../assets/Button";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";




export default function Anmelde() {
    return (


        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={{ fontWeight: "bold", fontSize: 17}}>NB! Før du anmelder:</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontSize: 15}}>Hva som har skjedd, alder og statsborgerskap har betydning for hvordan du kan levere en anmeldelse. Noe kan anmeldes på nett, i andre tilfeller må du møte hos politiet.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button label={"Lever anmeldelse til politiet"} color={"#222A3A"} onPress={() =>
                    WebBrowser.openBrowserAsync(
                        "https://www.politiet.no/tjenester/anmelde/"
                    )} textColor={"white"}/>
            </View>
        </View>

    );
}



const styles = StyleSheet.create({

    container:{
        marginBottom: 10,
    },

    textContainer:{
        marginTop: 20,
        marginLeft: 5,
    },
    buttonContainer:{
        margin: "10%",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
    },

});
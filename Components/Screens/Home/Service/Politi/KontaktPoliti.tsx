import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import { Header } from "react-native-elements";
import NotificationBar from "./NotificationBar";
import * as WebBrowser from "expo-web-browser";
import Button from "../assets/Button";
import { Linking } from "react-native";




export default function KontaktPoliti() {
    return (


        <View style={styles.mainContainer}>
                <View style={styles.topContainerText}>
                    <Text style={{fontSize: 17}}>Ring politiet</Text>
                    <Text onPress={()=>{Linking.openURL("tel: 02800");}} style={{fontSize: 17, fontWeight:"bold"}}>    02800</Text>
                </View>
            <View style={styles.bottomContainer}>
                <Text style={{fontSize: 17}}>Nødnummer</Text>
                <Text onPress={()=>{Linking.openURL("tel: 112");}} style={{fontSize: 17, fontWeight:"bold"}}>   112</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button label={"Kontakt politiet på e-post"} color={"#222A3A"} onPress={() =>
                    WebBrowser.openBrowserAsync(
                        "https://www.politiet.no/kontakt-oss/send-e-post-til-politiet/"
                    )} textColor={"white"}/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    mainContainer:{
        marginTop:8,
    },
    topContainerText:{
        flexDirection: "row",
        marginLeft: 15,
    },
    bottomContainer:{
        marginTop: 20,
        marginLeft: 15,
        flexDirection: "row",
    },
    buttonContainer:{
        margin: "10%",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
});
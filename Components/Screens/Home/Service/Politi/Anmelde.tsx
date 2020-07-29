import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import {TouchableOpacity} from "react-native-gesture-handler";
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
            <TouchableOpacity
                containerStyle={styles.linkContainer}
                onPress={()=>
                    WebBrowser.openBrowserAsync(
                        "https://www.politiet.no/tjenester/anmelde/"
                    )
                }
            >
                <View style={styles.linkStyleContainer}>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "white",}}> Gå til oversikt  </Text>
                    <View style={styles.iconContainer}>
                    <Icon name ="arrow-long-right" size={15} color="white"></Icon>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );
}



const styles = StyleSheet.create({

    container:{
        left: 5,
        height: "100%",
    },

    textContainer:{
        width: "90%",
        marginTop: 20,
        left: 5,
    },

    linkContainer:{
        width: "90%",
        height: "20%",
        marginTop: 25,
        left: 5,
        backgroundColor:"#212a3b",
    },

    linkStyleContainer:{
        flexDirection: "row",
        marginTop: 15,
        left: 5,
    },

    iconContainer:{
        left: 180,
    },

});
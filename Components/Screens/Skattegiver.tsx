import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";


const text = {
    intro: "Disse har hentet skattekortet ditt:",
    domstol: "DOMSTOLENE I NORGE",
    digdir: "DIGITALISERINGSDIREKTORATET",
    sogndal: "SOGNDAL KOMMUNE",


};

export default function Skattegiver() {
    return (

        <View>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.introText}>{text.intro}</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.textContainer}>{text.domstol}</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.textContainer}>{text.digdir}</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.textContainer}>{text.sogndal}</Text>
                </View>
            </View>


            <TouchableOpacity
                containerStyle={styles.linkContainer}
                onPress={() =>
                    WebBrowser.openBrowserAsync(
                        "https://skatt.skatteetaten.no/web/minskatteside/?innvalg=minearbeidsgivere#/minearbeidsgivere"
                    )
                }
            >
                <View style={styles.linkContainer}>
                    <Icon name="arrow-circle-right" size={20}></Icon>
                    <Text style={styles.linkText}> Detaljer om hvem som har {"\n"} hentet skattekorte ditt </Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}



const styles = StyleSheet.create({

    container: {
        marginTop: 10,
        marginBottom: 10,
        top: 30,
        borderBottomColor: "#E1E1E1",
        borderBottomWidth: 1,
        borderRadius: 30,

    },

    linkContainer:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        left: "4%",
        top: 10,

    },

    text:{
        fontSize: 15,
        margin: 10,
        top: "5%",
    },


    textContainer:{
    left: 10,
    },

    introText:{
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 3,
    },

    linkText:{
        fontSize: 16,
        fontWeight: "bold",
    },
});
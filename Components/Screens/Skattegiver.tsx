import * as React from "react";
import {View, ScrollView, Text, StyleSheet, Linking} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


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

            <View>
                <TouchableOpacity style = {styles.LinkContainer} onPress={() =>
                    WebBrowser.openBrowserAsync(
                        "https://skatt.skatteetaten.no/web/minskatteside/?innvalg=minearbeidsgivere#/minearbeidsgivere"
                    )
                }>
                    <FontAwesome key ={0} name ={'arrow-circle-right'} size={20} />
                    <Text style = {styles.linkText}>Detaljer om hvem som har {"\n"} hentet skattekorte ditt</Text>
                </TouchableOpacity>
            </View>


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
        marginLeft: 3,
        fontSize: 16,
        fontWeight: "bold",
    },
    LinkContainer: {
        margin: '5%',
        flexDirection: 'row',
        alignItems: "center",
},

});

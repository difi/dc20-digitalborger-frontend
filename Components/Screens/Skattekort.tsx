import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

export default function Skattekort() {
    return (
        <View style={styles.container}>
            <Text style ={styles.boldText}>
                Tjener du mer en 55 000 kroner må du ha et skattekort.
            </Text>


            <TouchableOpacity
                containerStyle={styles.linkContainer}
                onPress={() =>
                    WebBrowser.openBrowserAsync(
                        "https://www.skatteetaten.no/person/skatt/skattekort/bestille-endre/"
                    )
                }
            >
                <View style={styles.linkContainer}>
                    <Icon name="arrow-circle-right" size={20}></Icon>
                    <Text style={styles.linkText}> Bestill skattekort her </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({

    container: {
        height: 180,
        width: "100%",
        borderWidth: 5,
        borderColor: "#e6e6e6",
    },
    linkContainer:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        left: "4%",
    },
    boldText:{
        fontSize: 15,
        margin: 10,
        top: "5%",
    },

    linkText:{
        fontSize: 16,
        fontWeight: "bold",
    },
});
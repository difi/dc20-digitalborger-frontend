import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

const health = {

    docIntro: "Din fastlege:",
    officeIntro: "Instutisjon:",
    doctor: "Lars Breheim",
    office: "Leikanger legekontor",

};

export default function Fastlege() {
    return (
        <View>
            <View style={styles.row}>
            <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            WebBrowser.openBrowserAsync(
                                "https://tjenester.helsenorge.no/bytte-fastlege?"
                            )
                        }
                    >
                            <Icon name="pen" size={20} ></Icon>
                    </TouchableOpacity>
            </View>
                <View style={styles.firstTextContainer}>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>{health.docIntro}</Text>
                    <Text>{health.doctor}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.secondTextContainer}>
                     <Text style={{fontWeight: "bold", fontSize: 15}}>{health.officeIntro}</Text>
                     <Text>{health.office}</Text>
                 </View>
            </View>
                <TouchableOpacity
                containerStyle={styles.linkContainer}
                onPress={() =>
                    WebBrowser.openBrowserAsync(
                        "https://tjenester.helsenorge.no/Fastlegen"
                    )
                }
            >
                    <View style={styles.linkContainer}>
                        <Text style={{ fontWeight: "bold",fontSize: 15}}> Mer om din fastlege </Text>
                        <Icon name="long-arrow-alt-right" size={15}></Icon>
                    </View>
                </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginBottom: 15,
        top: 10,
        borderBottomWidth: 1,
        borderColor: "#E1E1E1",
    },
    firstTextContainer: {
        right: "50%",
    },
    secondTextContainer:{
        left: "6%",
    },
    iconContainer:{
        left: 320,
    },
    linkContainer:{
        flexDirection: "row",
        marginTop: 15,
    },
});

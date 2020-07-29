import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import {white} from "react-native-paper/lib/typescript/src/styles/colors";



export default function StipendLån() {
    return (


        <View style={styles.container}>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    onPress={() =>
                        WebBrowser.openBrowserAsync(
                            "https://dinesider.lanekassen.no/Nettsoknad/Default.aspx?soknadstype=ST01D2&UndervisningsAr=Innevarende"
                        )
                    }
                >
                    <View style={styles.iconContainer}>
                        <Icon name="arrow-circle-right" size={15}></Icon>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 13}}>Videregående-{"\n"}opplæring </Text>
                    </View>

                </TouchableOpacity>
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    onPress={() =>
                        WebBrowser.openBrowserAsync(
                            "https://lanekassen.no/nb-NO/Stipend-og-lan/soknader/soknad-om-stotte-til-utdanning-i-norge1/grunnskoleopplaring/"
                        )
                    }
                >
                    <View style={styles.iconContainer}>
                        <Icon name="arrow-circle-right" size={15}></Icon>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 13}}>Grunnskole-{"\n"}opplæring </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    onPress={() =>
                        WebBrowser.openBrowserAsync(
                            "https://dinesider.lanekassen.no/Nettsoknad/Default.aspx?soknadstype=ST01D3&UndervisningsAr=Innevarende"
                        )
                    }
                >
                    <View style={styles.iconContainer}>
                        <Icon name="arrow-circle-right" size={15}></Icon>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 13}}>Høyere utdanning </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    onPress={() =>
                        WebBrowser.openBrowserAsync(
                            "https://www.lanekassen.no/nn-NO/stipend-og-lan/soknader/soknad-om-stotte-til-utdanning-i-noreg1/larling-/"
                        )
                    }
                >
                    <View style={styles.iconContainer}>
                        <Icon name="arrow-circle-right" size={15}></Icon>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 13}}>Lærling </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    onPress={() =>
                        WebBrowser.openBrowserAsync(
                            "https://dinesider.lanekassen.no/Nettsoknad/Default.aspx?soknadstype=ST01D3&UndervisningsAr=Forrige"
                        )
                    }
                >

                    <View style={styles.iconContainer}>
                        <Icon name="arrow-circle-right" size={15}></Icon>
                    </View>
                        <View style={styles.textContainer}>
                            <Text style={{fontSize: 13}}>Sommerkurs </Text>
                        </View>
                </TouchableOpacity>
            </View>
        </View>



    );
}

const styles = StyleSheet.create({

    container:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "90%",
        left: 17,

    },

    linkContainer:{
        width: "49%",
        height: "25%",
        marginTop: 20,
        backgroundColor: 'white'

    },

    iconContainer:{
        flexDirection: "row",
        marginTop: 16,
        alignSelf: "flex-end",
        right: 8,

    },

    textContainer:{
        left: 5,
        bottom: 15,

    },



});
import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";




export default function PolitiAttest() {
    return (


            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={{ fontWeight: "bold", textDecorationLine: "underline", fontSize: 15}}>Før du søker politiattest:</Text>
                </View>
                <View style={styles.textContainer}>
                        <Text style={{fontSize: 13}}>{'\u30FB'}Du kan ikke søke om politiattest for andre enn deg selv.</Text>
                </View>
                <View style={styles.textContainer}>
                        <Text style={{fontSize: 13}}>{'\u30FB'}En politiattest er kun gylding i tre måneder</Text>
                </View>
                <View style={styles.textContainer}>
                        <Text style={{fontSize: 13}}>{'\u30FB'}Er du under 18 år må foresatt også skrive under.</Text>
                </View>
                <TouchableOpacity
                    containerStyle={styles.linkContainer}
                    onPress={()=>
                        WebBrowser.openBrowserAsync(
                            "https://attest.politiet.no/web/"
                        )
                    }
                    >
                    <View style={styles.linkStyleContainer}>
                        <Text style={{fontWeight: "bold", fontSize: 15, color: "white",}}> Søk om politiattest eller sjekk status  </Text>
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
        height: "100%",
        bottom: 5,
    },

    textContainer:{
        marginTop: 20,
        left: 5,
    },

    linkContainer:{
        width: "90%",
        height: "20%",
        marginTop: 25,
        left: 10,
        backgroundColor:"#212a3b",
    },

    linkStyleContainer:{
        flexDirection: "row",
        marginTop: 15,
        left: 5,
    },

    iconContainer:{
        left: 15,
    },

});
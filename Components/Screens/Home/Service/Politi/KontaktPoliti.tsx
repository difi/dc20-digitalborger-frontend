import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
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

            <TouchableOpacity
                containerStyle={styles.linkContainer}
                onPress={()=>
                    WebBrowser.openBrowserAsync(
                        "https://www.politiet.no/kontakt-oss/send-e-post-til-politiet/"
                    )
                }
            >
                <View style={styles.linkStyleContainer}>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "white",}}> Kontakt politiet på e-post </Text>
                    <View style={styles.iconContainer}>
                        <Icon name ="arrow-long-right" size={15} color="white"></Icon>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );
}



const styles = StyleSheet.create({

    mainContainer:{
        left: 5,
        marginTop: 30,
        height: "100%",
    },
    topContainerText:{
        flexDirection: "row",
        left: 10,
    },
    bottomContainer:{
        marginTop: 20,
        left: 10,
        flexDirection: "row",
    },
    linkContainer:{
        width: "90%",
        height: "20%",
        marginTop: 30,
        left: 10,
        backgroundColor:"#212a3b",
    },
    linkStyleContainer:{
        flexDirection: "row",
        marginTop: 15,
        left: 5,
    },
    iconContainer:{
        left: 95,
    },

});
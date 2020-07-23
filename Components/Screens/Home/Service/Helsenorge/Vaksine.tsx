import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

const vaccines = {

    HPV: "HPV-injekson",
    Polio: "Poliomyelitt",
    Influ: "Influensa A",
    Røde: "Røde hunder",
    Stiv: "Stivkrampe",
    Kik: "Kikhoste",
};

const date = {

    HPVDate: "30.01.2018",
    PolioDate: "19.12.2011",
    InfluDate: "08.12.2009",
    RødeDate: "28.08.2008",
    StivDate: "08.11.2007",
    KikDate: "07.07.1997",
};

export default function Vaksine() {
    return (

        <View>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <View style={styles.leftTextContainer}>
                        <Text style={{ fontWeight: "bold", fontSize: 15, textDecorationLine: "underline"}}>Vaksinasjon:</Text>
                    </View>

                    <View style={styles.rightTextContainer}>
                        <Text style={{ fontWeight: "bold", fontSize: 15, textDecorationLine: "underline"}}>Vaksinasjonsdato:</Text>
                    </View>

                </View>
                <View style={styles.textContainer}>
                    <View style={styles.leftTextContainer}>
                        <Text style={{fontSize: 13}}>{vaccines.HPV}</Text>
                    </View>
                    <View style={styles.rightTextContainer}>
                        <Text style={{fontSize: 13}}>{date.HPVDate}</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.leftTextContainer}>
                        <Text style={{fontSize: 13}}>{vaccines.Polio}</Text>
                    </View>
                    <View style={styles.rightTextContainer}>
                        <Text style={{fontSize: 13}}>{date.PolioDate}</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.leftTextContainer}>
                        <Text style={{fontSize: 13}}>{vaccines.Influ}</Text>
                    </View>
                    <View style={styles.rightTextContainer}>
                        <Text style={{fontSize: 13}}>{date.InfluDate}</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.leftTextContainer}>
                        <Text style={{fontSize: 13}}>{vaccines.Røde}</Text>
                    </View>
                    <View style={styles.rightTextContainer}>
                        <Text style={{fontSize: 13}}>{date.RødeDate}</Text>
                    </View>

                </View>
                <TouchableOpacity
                    onPress={() =>
                        WebBrowser.openBrowserAsync(
                            "https://skatt.skatteetaten.no/web/minskatteside/?innvalg=minearbeidsgivere#/minearbeidsgivere"
                        )
                    }
                >
                    <View style={styles.linkContainer}>
                        <Text style={{ fontWeight: "bold", fontSize: 13}}> Gå til din vaksine oversikt </Text>
                        <Icon name="arrow-long-right" size={16} ></Icon>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}



const styles = StyleSheet.create({

    container:{
        width: "100%",
        height: "100%",
    },
    textContainer:{
        flexDirection: "row",
        marginTop: 10,

    },
    rightTextContainer:{
        flex: 1,
        left: 40,
    },
    leftTextContainer:{
        flex: 1,
        left: 4,
    },
    linkContainer:{
        flexDirection: "row",
        marginTop: 30,
    },
});
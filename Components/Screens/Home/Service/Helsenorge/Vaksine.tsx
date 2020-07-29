import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import {useEffect, useState} from "react";
import {retrieveData} from "../../../../Storage";
import {getPrescriptionInfo, getVaccineData} from "../../../../ServerCommunications/Services/HelseNorgeService";

const  vaccines = [
    {
        name: "HPV-injeksjon",
        date: "10.01.2018",
    },
    {
        name: "Poliomyelitt",
        date: "19.12.2011",
    },
    {
        name: "Influensa A",
        date: "08.12.2009",
    },
    {
        name: "Røde hunder",
        date: "28.08.2008",
    },
    {
        name: "Stivkrampe",
        date: "08.11.2007",
    },
    {
        name: "Kikhoste",
        date: "07.07.1997",
    },
];


export default function Vaksine() {

    const [vaccineData, setVaccine] = useState([
        { name: "", date: ""},
    ])


    useEffect(() => {
        (async () => {
            const pid: number = await retrieveData("pid");
            let result = await getVaccineData(pid);
            setVaccine(result);
        })();
    }, []);



    return (

        <View>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <View style={styles.leftTextContainer}>
                        <Text style={{ fontWeight: "bold", fontSize: 17, textDecorationLine: "underline"}} allowFontScaling={true}>Vaksinasjon:</Text>
                    </View>
                    <View style={styles.rightTextContainer}>
                        <Text style={{ fontWeight: "bold", fontSize: 17, textDecorationLine: "underline"}} allowFontScaling={true}>Vaksinasjonsdato:</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.leftTextContainer}>
                        {vaccineData.map((vaccines, index) => (
                            <View key={index}>
                                <Text style={{fontSize: 16}} allowFontScaling={true}>{vaccines.name}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.rightTextContainer}>
                        {vaccineData.map((vaccines1, index1) => (
                            <View key={index1}>
                                <Text style={{fontSize: 16}} allowFontScaling={true}>{vaccines1.date}</Text>
                            </View>
                        ))}
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
                        <Text style={{ fontWeight: "bold", fontSize: 17}} allowFontScaling={true}> Gå til din vaksine oversikt </Text>
                        <Icon name="arrow-long-right" size={17} ></Icon>
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
        flexShrink: 1,
        flexDirection: "row",
        marginTop: 10,
    },
    rightTextContainer:{
        flex: 1,
        left: 25,
    },
    leftTextContainer:{
        flex: 1,
        left: 4,
    },
    linkContainer:{
        flexDirection: "row",
        marginTop: 50,
    },
});
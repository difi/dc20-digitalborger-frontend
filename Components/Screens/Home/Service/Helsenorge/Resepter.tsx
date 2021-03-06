import * as React from 'react';
import {Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as WebBrowser from "expo-web-browser";
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';
import {useEffect, useState} from "react";
import {retrieveData} from "../../../../Storage";
import {getPrescriptionInfo} from "../../../../ServerCommunications/Services/HelseNorgeService";
import Button from "../assets/Button";


export default function Resepter() {
    const [prescriptionData, setPrescription ] = useState(
        {Prescriptions: [{name: "", category: "", status: ""}],
        ExpiredPrescriptions: [{name: "", category: "", status: ""}]},);


    useEffect(() => {
        (async () => {
            const pid: number = await retrieveData("pid");
            let result = await getPrescriptionInfo(pid);
            setPrescription(result);
        })();
    }, []);



    return(
        <View style={styles.container}>

            <View style={styles.status}>
                <FontAwesome name={"circle"}  color={"limegreen"}  size={18} allowFontScaling={true}/>
                <Text style={styles.boldText} allowFontScaling={true}>Aktive resepter</Text>

            </View>


            {prescriptionData.Prescriptions.map((prescription, index) => (
                <View key={index} style={{
                    borderBottomColor: "lightgrey",
                    marginTop: 5,
                    borderBottomWidth: (index == prescriptionData.Prescriptions.length-1) ? 0: 1}}>

                    <Text style={styles.nameText} allowFontScaling={true}>{prescription.name}</Text>

                    <View style={styles.InfoContainer}>
                        <Text style={{fontSize: 15}} allowFontScaling={true}>{prescription.category}</Text>
                        <Text style={{fontSize: 15}} allowFontScaling={true}>{prescription.status}</Text>
                    </View>

                </View>


            ))}

            <View style={styles.status}>
                <FontAwesome name={"circle"} color={"crimson"} size={18} allowFontScaling={true}/>
                <Text style={styles.boldText} allowFontScaling={true} >Utekspiderte resepter</Text>

            </View>


            {prescriptionData.ExpiredPrescriptions.map((prescription1, index1) => (
                <View key={index1} style={styles.expiredContainer}>

                    <Text style={styles.nameText} allowFontScaling={true}>{prescription1.name}</Text>

                    <View style={styles.InfoContainer}>
                        <Text style={{fontSize: 15}} allowFontScaling={true} >{prescription1.category}</Text>

                        <TouchableOpacity
                            style={{flexDirection: "row"}}
                            onPress={() => WebBrowser.openBrowserAsync("https://helsenorge.no/om-min-helse/meldinger")}>
                            <Text style={{fontSize: 15}} allowFontScaling={true}>{prescription1.status}</Text>
                            <Entypo name={"cycle"}size={20}  allowFontScaling={true}/>
                        </TouchableOpacity>

                    </View>
                </View>

            ))}

            <View style={styles.buttonContainer}>
                <Button label={"Se alle resepter"} color={"#9a1c6f"} onPress={() =>
                    WebBrowser.openBrowserAsync(
                        "https://helsenorge.no/e-resept-og-mine-resepter/dine-resepter-pa-helsenorge-no"
                    )} textColor={"white"}/>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    status: {
        flexDirection: "row",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginTop: 10,
    },
    expiredContainer:{
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
    },
    InfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        marginLeft: 8,
    },
    nameText: {
        fontSize: 17,
        marginLeft: 8,
        marginTop: 5,
    },
    boldText: {
        fontSize: 17,
        fontWeight: "bold",
    },
    buttonContainer: {
        margin: "10%",
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "6%",
    },
})

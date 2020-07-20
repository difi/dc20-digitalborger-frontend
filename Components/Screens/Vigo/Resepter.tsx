import * as React from 'react';
import {Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const  Prescriptions = [
    {
        name: "Telfast",
        category: "Allergimedisn",
        status: "Kan fremdeles brukes"
    },
    {
        name: "Microgynom",
        category: "Prevensjonsmiddel",
        status: "Kan fremdeles brukes",
    },
];

const ExpiredPrescriptions = [
    {
        name: "Tramadal",
        category: "Smertestillende",
        status: "Forny",
    },
    {
        name: "Nobilgan",
        category: "Søvndyssende",
        status: "Forny",
    }
];



export default function Resepter() {
    return(
        <ScrollView style={styles.container}>

            <View style={styles.Statuscontainer}>
                <FontAwesome name={"circle"}  color={"limegreen"}  size={20}/>
                <Text style={styles.text}>Aktive resepter</Text>

            </View>


            {Prescriptions.map((prescription, index) => (
                <View key={index} style={styles.PrescriptionsContainer}>

                    <Text style={styles.PrescriptionsName}>{prescription.name}</Text>


                    <View  style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={styles.PrescriptionsCat}>{prescription.category}</Text>
                        <Text style={styles.PrescriptionsCat}>{prescription.status}</Text>
                    </View>

                </View>


            ))}

            <View style={styles.Statuscontainer}>
                <FontAwesome name={"circle"} color={"crimson"} size={20}/>
                <Text style={styles.text}>Utekspiderte resepter</Text>

            </View>


            {ExpiredPrescriptions.map((prescription1, index1) => (
                <View key={index1} style={styles.PrescriptionsContainer}>

                    <Text style={styles.PrescriptionsName}>{prescription1.name}</Text>

                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.PrescriptionsCat}>{prescription1.category}</Text>


                        <TouchableOpacity>
                            <Text style={styles.PrescriptionsCat}>{prescription1.status}</Text>
                            <FontAwesome5 name={"recycle"} size={20}/>
                        </TouchableOpacity>

                    </View>
                </View>

            ))}

            <TouchableOpacity
                style={styles.buttonContainer} onPress={() => Linking.openURL("https://helsenorge.no/e-resept-og-mine-resepter/dine-resepter-pa-helsenorge-no")}>
                <Text style={styles.buttonText}>se alle resepter</Text>
                <FontAwesome key ={0} name={"long-arrow-right"} size={20}/>
            </TouchableOpacity>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
   container: {
       flex: 1,
   },
    Statuscontainer: {
       flexDirection: "row",
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },

    PrescriptionsContainer:{
       borderBottomWidth: 1,
        borderBottomColor: "gray",

    },
    PrescriptionsName: {
        fontSize: 17,
        padding: "2%"

    },
    PrescriptionsCat: {
        fontSize: 14,
        padding: "2%"

    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        width: "100%",
        marginLeft: 10,

    },
    buttonContainer: {
       flexDirection: "row",
        justifyContent: "space-between",
        width: 140,

    },
    buttonText:{
        fontSize: 15,

    }
});
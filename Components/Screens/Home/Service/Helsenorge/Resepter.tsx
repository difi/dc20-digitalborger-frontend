import * as React from 'react';
import {Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';

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
    },

];



export default function Resepter() {
    return(
        <View style={styles.container}>

            <View style={styles.status}>
                <FontAwesome name={"circle"}  color={"limegreen"}  size={20}/>
                <Text style={styles.boldText}>Aktive resepter</Text>

            </View>


            {Prescriptions.map((prescription, index) => (
                <View key={index} style={{
                    borderBottomColor: "lightgrey",
                    borderBottomWidth: (index == Prescriptions.length-1) ? 0: 1}}>

                    <Text style={styles.nameText}>{prescription.name}</Text>

                    <View style={styles.Infogrid}>
                        <Text style={styles.categoryText}>{prescription.category}</Text>
                        <Text style={styles.categoryText}>{prescription.status}</Text>
                    </View>

                </View>


            ))}

            <View style={styles.status}>
                <FontAwesome name={"circle"} color={"crimson"} size={20}/>
                <Text style={styles.boldText}>Utekspiderte resepter</Text>

            </View>


            {ExpiredPrescriptions.map((prescription1, index1) => (
                <View key={index1} style={styles.expiredContainer}>

                    <Text style={styles.nameText}>{prescription1.name}</Text>

                    <View style={styles.Infogrid}>
                        <Text style={styles.categoryText}>{prescription1.category}</Text>

                        <TouchableOpacity
                            style={{flexDirection: "row"}}
                            onPress={() => Linking.openURL("https://helsenorge.no/om-min-helse/meldinger")}>
                            <Text style={styles.categoryText}>{prescription1.status}</Text>
                            <Entypo name={"cycle"}size={20}/>
                        </TouchableOpacity>

                    </View>
                </View>

            ))}

            <TouchableOpacity
                style={styles.buttonContainer} onPress={() => Linking.openURL("https://helsenorge.no/e-resept-og-mine-resepter/dine-resepter-pa-helsenorge-no")}>
                <Text style={styles.buttonText}>Se alle resepter</Text>
                <FontAwesome key ={0} name={"long-arrow-right"} size={24}/>
            </TouchableOpacity>

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
    },
    expiredContainer:{
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },
    Infogrid: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nameText: {
        fontSize: 18,
        padding: "2%"

    },
    categoryText: {
        fontSize: 16,
        padding: "2%"

    },
    boldText: {
        fontSize: 18,
        fontWeight: "bold",
        width: "100%",
        marginLeft: 10,

    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 170,

    },
    buttonText:{
        fontSize: 18,

    }
});
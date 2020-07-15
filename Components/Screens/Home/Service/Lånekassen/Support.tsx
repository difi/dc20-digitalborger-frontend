import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import * as Location from "expo-location";
import {fetchUserInfoAsync} from "expo-auth-session";


const SupportForStudent = [
    {
        title: "Utstyrsstipend",
        sum: "1 660.00",
    },
    {
        title: "Borteboerstipend",
        sum: "43 753.00",
    },
    {
        title: "Stipend",
        sum: "13 626.00",
    },
    {
        title: "Lån",
        sum: 0,
    },
    {
        title: "Neste Utbetaling",
        sum: "346 862.21",
    }
]



export default function Support(){

    const [status, setStatus] = useState("");
    const [loan, setLoan] = useState(Array);

        useEffect( () => {

             axios({
                method: "GET",
                url: "http://feat01-drupal8.dmz.local/dib/laanekassen/23079418366",

            }).then(res => {
                setLoan(res.data)
            } )

        }, []);



    return(
        <View style={{flex:1}}>
            <Text style={styles.textInfo}>Gjennomsnittstøtte i vanlig videregående opplæring: </Text>

            {SupportForStudent.map((item, index) => (
                <View key = {index} style={(index == SupportForStudent.length-1) ? styles.LastElement:styles.listContainer}>

                    <Text style={styles.listText}>{item.title}</Text>
                    <Text style={
                        {fontWeight: item.title == "Neste Utbetaling" ? "bold": "normal",
                            fontSize: 16,
                            textDecorationLine: item.title == "Neste Utbetaling" ? "underline": "none",
                        } }>{item.sum + " kr"}</Text>
                </View>


            ))}



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',

    },
    textInfo: {
        fontSize: 15,
        fontStyle: "italic",

    },
    listContainer: {
      flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        flexShrink: 1,
    },
    LastElement:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 1,

    },
    listText: {
        fontSize: 16,
        padding: "5%"
    }

})
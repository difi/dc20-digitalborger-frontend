import * as React from 'react';
import {Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as WebBrowser from "expo-web-browser";
import {getVaccineData} from "../../../../ServerCommunications/Services/HelseNorgeService";
import {retrieveData} from "../../../../Storage";
import {useEffect, useState} from "react";




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

    return(
        <SafeAreaView>
            <View style = {styles.titleHeader}>
                <Text style={styles.titleTextLeft}>Vaksinasjon</Text>
                <Text style={styles.titleTextRight}>Vaksinasjonsdato</Text>
            </View>
            <ScrollView>
                {vaccineData.map((item, index) => (
                    <View  key = {index} style={styles.listItems}>
                                <Text style={styles.ItemLeftText}>{item.name}</Text>
                                <Text style={styles.ItemRightText}>{item.date}</Text>
                    </View>
                ))}
            </ScrollView>
            <View>
                <TouchableOpacity
                    style={styles.LinkContainer}
                    onPress={() =>
                        WebBrowser.openBrowserAsync("https://tjenester.helsenorge.no/vaksiner")
                    }
                >
                    <Text style={{fontSize: 15}}> Full vaksine oversikt </Text>
                    <FontAwesome key={0} name={"arrow-circle-right"} size={20} color = "#4d264f" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

    titleHeader: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: "15%",
        width: "100%",
        bottom: 10,
        backgroundColor: '#9a1c6f',
    },
    titleTextLeft:{
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        right: 25,
    },
    titleTextRight:{
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        left: 24,
    },
    listItems: {
        flexDirection: "row",
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    ItemLeftText: {
        fontSize: 15,
        marginBottom: 10,
        flex: 1/2,
        left: 10,
    },
    ItemRightText:{
        fontSize: 15,
        flex: 1/2,
        left: 40,
    },
    LinkContainer: {
        flexDirection: "row",
        alignSelf: "flex-end",
        right: 15,
        top: 10,
    },

})
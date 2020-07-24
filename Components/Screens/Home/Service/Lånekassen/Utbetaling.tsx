import * as React from 'react';
import {Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Betalinger = [
    {
        date: '16.04.2020',
        occurrence:'Utbetaling',
        sum: 11020,
    },
    {
        date: '15.03.2020',
        occurrence:'Utbetaling',
        sum: 8265,
    },
    {
        date: '14.02.2020',
        occurrence:'Utbetaling',
        sum: 8265,
    },
    {
        date: '14.01.2020',
        occurrence:'Utbetaling',
        sum: 8265,
    },
    {
        date: '14.12.2019',
        occurrence:'Utbetaling',
        sum: 8200,
    },



    ];

export default function Utbetaling() {

    return(
        <SafeAreaView style={styles.container}>

            <View style = {styles.titleHeader}>
                <Text style={styles.titleText}>Dato</Text>
                <Text style={styles.titleText}>Hendelse</Text>
                <Text style={styles.titleText}>Beløp</Text>
            </View>

            <ScrollView>
                {Betalinger.map((item, index) => (
                    <View  key = {index} style={styles.listItems}>
                        <Text style={styles.ItemText}>{item.date}</Text>
                        <Text style={styles.ItemText}>{item.occurrence + "     "}</Text>
                        <Text style={styles.ItemText}>{item.sum + " kr"}</Text>
                    </View>

                ))}
            </ScrollView>

                <View>
                <TouchableOpacity style={styles.LinkContainer} onPress={() => Linking.openURL("https://lanekassen.no/nb-NO/verktoy-og-frister/Frister-i-Lanekassen/utbetaling-av-utdanningsstotte/") }>
                    <FontAwesome key ={0} name ={'arrow-circle-right'} size={30} color={'#4d264f'} />
                </TouchableOpacity>
                </View>


        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
        width: '100%',
        height: '100%',

    },
    titleHeader: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#4d264f',
        height: 40,
    },
    titleText: {
        color: "white",
        fontSize: 16,
    },
    listItems: {
        flexDirection: "row",
        flexShrink: 1,
        borderBottomWidth: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    ItemText: {
        fontSize: 15,
        padding: '2%'

    },
    LinkContainer: {
        position: "absolute",
        right: 0,
        bottom: 0
    },
    ScrollViewCont: {


    }

})
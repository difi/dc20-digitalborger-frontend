import * as React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
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
        date: '15.01.2020',
        occurrence:'Utbetaling',
        sum: 20100,

    }];



export default function Utbetaling() {

    return(
        <View style={styles.container}>

            <View style = {styles.titleHeader}>

                <View style={styles.titleBox}><Text style={styles.titleText}>Dato</Text></View>
                <View style={styles.titleBox}><Text style={styles.titleText}>Hendelse</Text></View>
                <View style={styles.titleBox}><Text style={styles.titleText}>Beløp</Text></View>


            </View>

                {Betalinger.map((item, index) => (
                    <View style={styles.listItems}>
                        <Text style={styles.listItemText}>{item.date}</Text>
                        <Text style={styles.listItemText}>{item.occurrence}</Text>
                        <Text style={styles.listItemText}>{item.sum}</Text>
                    </View>

                ))}

            <View>
                <TouchableOpacity style={styles.LinkContainer} onPress={() => Linking.openURL("https://lanekassen.no/nb-NO/verktoy-og-frister/Frister-i-Lanekassen/utbetaling-av-utdanningsstotte/") }>
                    <FontAwesome key ={0} name ={'arrow-circle-right'} size={30} />
                </TouchableOpacity>


            </View>


        </View>
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
        alignItems: "center"
    },
    titleBox: {
        backgroundColor: '#4d264f',
        alignItems: "center",
        justifyContent: "center",
        width: 110,
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
        borderBottomColor: "black",
        justifyContent: "space-around",
        alignItems: "center"
    },
    listItemText: {
        fontSize: 15,
        margin: 8,

    },
    LinkContainer: {
        position: "absolute",
        right: 0,
        marginTop: "2%"
    },

})
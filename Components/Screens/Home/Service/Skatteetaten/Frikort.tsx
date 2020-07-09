import * as React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';




export default function Frikort(){
    return (
        <View style = {styles.gridContainer}>

            <Text style = {styles.infoText}>Et frikort er et skattekort som viser at arbeidsgiver ikke skal trekke skatt dersom du tjener 55 000 kroner eller mindre i løpet av året. {'\n'} </Text>

            <TouchableOpacity style = {styles.buttonArea} onPress={() => Linking.openURL('https://www.skatteetaten.no/person/skatt/skattekort/frikort/bestille-frikort/')}>


                <FontAwesome key ={0} name ={'arrow-circle-right'} size={20} />
                <Text style = {styles.buttonText}>Bestill frikort her</Text>
            </TouchableOpacity>


        </View>


    );
}

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "lightgrey",
        justifyContent : 'space-between'

    },

    infoText: {
        margin: '5%',
        fontSize: 13,
    },

    buttonArea: {
        margin: '5%',
        flexDirection: 'row',
    },

    buttonText: {
        fontSize: 13,
        fontWeight: "bold",
        marginLeft: 10
    }
})

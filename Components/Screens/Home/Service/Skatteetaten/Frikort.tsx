import * as React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon} from "react-native-elements";



export default function Frikort(){
    return (
        <View style = {styles.container}>

            <Text style = {styles.infoText}>Et frikort er et skattekort som viser at arbeidsgiver ikke skal trekke skatt dersom du tjener 55 000 kroner eller mindre i løpet av året.{"\n"}{"\n"}

                Hadde du frikort i fjor trenger du ikke søke om nytt frikort. </Text>

            <TouchableOpacity style = {styles.touchableArea} onPress={() => Linking.openURL('https://www.skatteetaten.no/person/skatt/skattekort/frikort/bestille-frikort/')}>


                <FontAwesome key ={0} name ={'arrow-right'} size={20} />
                <Text style = {styles.text}>Bestill frikort her</Text>
            </TouchableOpacity>


        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#87CEEB",
    },

    infoText: {
        margin: '5%',
        fontSize: 13,
    },

    touchableArea: {
        margin: '5%',
        flexDirection: 'row'
    },

    text: {
        fontSize: 13,
        padding: 2,
        fontWeight: "bold"
    }
})

import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";




    const gradeTitle = {
        leftTitle: 'Fag',
        rightTitle: 'Karakterer',

}
/**
 * Karakterer for første året
 */

    const gradeInSubjects1  = [
        {
            sub: 'RLE',
            grade: 5,
        },
        {
            sub: 'Naturfag',
            grade: 2,
        },
        {
            sub: 'Matematikk',
            grade: 3,
        },

    ];
    const gradeInSubject3 = [
        {
            sub: 'Spansk',
            grade: 4,
        },
        {
            sub: 'Kjemi1',
            grade: 6,
        },
        {
            sub: 'Samfunnsfag',
            grade: 4,
        },

        ];

    const gradeInSubject2 = [
        {
            sub: 'R2',
            grade: 4,
        },
        {
            sub: 'Kjemi2',
            grade: 5,
        },
        {
            sub: 'Fysikk',
            grade: 4,
        },

    ];


    export default function Grades() {

        return(
            <View style={styles.container}>

                <View style={styles.buttonContainer}>


                </View>



                <Text> Hello sunshine</Text>
            </View>
        )

    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dcdcdc",
    },
    buttonContainer: {
        flexDirection: "row",
        padding: '5%',
        height: 50,
        width: '100%',


    },
    button: {
        margin: 10,
        height: 20,
        width: 30,
        borderRadius: 5,

    },


});
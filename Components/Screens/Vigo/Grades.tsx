import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";


    const gradeYear = [
        {
            year: "1.året"
        },

        {
            year: "2.året"

        },
        {
            year: "3.året"
        }

    ]

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

    function clickedYear(event){

    }


    export default function Grades() {

        return(
            <View style={styles.container}>

                <View style={styles.buttonContainer}>
                    {gradeYear.map((item, index) => (

                            <TouchableOpacity style={styles.button}>
                                <Text style = {{margin: 10}}>{item.year}</Text>
                            </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.titleTextArea}>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>{gradeTitle.leftTitle}</Text>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>{gradeTitle.rightTitle}</Text>
                </View>

                {gradeInSubjects1.map((item1, index1) => (
                    <View style = {{flexDirection: "row", justifyContent: "space-between", padding: '3%'}}>
                        <Text style={{fontSize: 15 }}>{item1.sub}</Text>
                        <Text style={{fontSize: 15 }}>{item1.grade}</Text>
                    </View>
                ))}




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
        backgroundColor: "yellow",
        alignItems: "center",

    },
    button: {
        height: 40,
        width: 100,
        margin: '5%',
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: '#97c556',


    },
    titleTextArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: '3%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: "transparent"
    },


});
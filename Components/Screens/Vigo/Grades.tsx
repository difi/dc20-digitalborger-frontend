import React, {useState} from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TabBar, SceneMap, TabView} from 'react-native-tab-view';


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
    const gradeInSubject2 = [
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

    const gradeInSubject3 = [
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

    const firstYear = () => (

        <View style = {[styles.container, {backgroundColor: "transparent"}]}>
            <View style={styles.TitleArea}>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.leftTitle}</Text>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.rightTitle}</Text>

            </View>
            {gradeInSubjects1.map((item1, index1) => (

                <View style = {styles.GradesDisplay}>
                    <Text style={{fontSize: 15 }}>{item1.sub}</Text>
                    <Text style={{fontSize: 15 }}>{item1.grade}</Text>
                </View>
            ))}

        </View>
    );

    const secondYear = () => (
        <View style = {[styles.container, {backgroundColor: "transparent"}]}>
            <View style={styles.TitleArea}>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.leftTitle}</Text>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.rightTitle}</Text>

            </View>
            {gradeInSubject2.map((item2, index2) => (

                <View style = {styles.GradesDisplay}>
                    <Text style={{fontSize: 15 }}>{item2.sub}</Text>
                    <Text style={{fontSize: 15 }}>{item2.grade}</Text>
                </View>
            ))}
        </View>
    );

    const thirdYear = () => (
        <View style = {[styles.container, {backgroundColor: "transparent"}]}>
            <View style={styles.TitleArea}>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.leftTitle}</Text>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.rightTitle}</Text>

            </View>
            {gradeInSubject3.map((item3, index3) => (
                <View style = {styles.GradesDisplay}>
                    <Text style={{fontSize: 15 }}>{item3.sub}</Text>
                    <Text style={{fontSize: 15 }}>{item3.grade}</Text>
                </View>
            ))}
        </View>
    );

    const initialLayout = { width: Dimensions.get('window').width, backgroundColor: "pink"};



    export default function Grades() {
        const [index, setIndex] = React.useState(0);


        const tabBarOptions =  {

            style: {
                backgroundColor : '#97c556',
            }

        }

        const [routes] = React.useState([
            { key: 'first', title: '1.året', tabBarStyle: {backgroundColor: '#97c556'} },
            { key: 'second', title: '2.året', tabBarStyle: {backgroundColor: '#97c556'} },
            { key: 'third', title: '3.året', tabBarStyle: {backgroundColor: '#97c556'} },
        ]);

        const renderScene = SceneMap({
            first: firstYear,
            second: secondYear,
            third: thirdYear,
        });



        return(
            <View style={styles.container}>

                <TabView style={{backgroundColor: "green"}} navigationState={{index, routes}} renderScene={renderScene} onIndexChange={setIndex} initialLayout={initialLayout} sceneContainerStyle={{backgroundColor: "red"}}/>

            </View>
        )

    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
    },
    buttonContainer: {
        flexDirection: "row",
        backgroundColor: "yellow",
        alignItems: "center",

    },
    TitleArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: '3%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: "transparent"
    },
    GradesDisplay:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: '3%',
        flexShrink: 1,
        flexWrap: "wrap",
        alignItems: "center",

    }


});
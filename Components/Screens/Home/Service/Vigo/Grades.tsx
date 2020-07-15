import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {TabBar, SceneMap, TabView} from 'react-native-tab-view';


    const gradeTitle = {
        leftTitle: 'Fag',
        rightTitle: 'Karakterer',

}
    const grades = {
        first: [
            {
                subject: 'RLE',
                grade: 5,
            },
            {
                subject: 'Naturfag',
                grade: 2,
            },
            {
                subject: 'Matematikk',
                grade: 3,
            },
        ],
        second: [
            {
                subject: 'Spansk',
                grade: 4,
            },
            {
                subject: 'Kjemi 1',
                grade: 6,
            },
            {
                subject: 'Samfunnsfag',
                grade: 4,
            },
        ],
        third: [
            {
                subject: 'R2',
                grade: 4,
            },
            {
                subject: 'Kjemi 2',
                grade: 5,
            },
            {
                subject: 'Fysikk',
                grade: 4,
            },
        ]

    }


    const firstYear = () => (

        <View style = {[styles.gridContainer, {backgroundColor: "transparent"}]}>
            <View style={styles.TitleArea}>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.leftTitle}</Text>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.rightTitle}</Text>

            </View>
            {grades.first.map((item1, index1) => (

                <View key = {index1} style = {[styles.GradesDisplay, {height: 10 * grades.first.length}]}>
                    <Text style={styles.textStyle}>{item1.subject}</Text>
                    <Text style={styles.textStyle}>{item1.grade}</Text>
                </View>
            ))}

        </View>
    );

    const secondYear = () => (
        <View style = {[styles.gridContainer, {backgroundColor: "transparent"}]}>
            <View style={styles.TitleArea}>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.leftTitle}</Text>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.rightTitle}</Text>

            </View>
            {grades.second.map((item2, index2) => (

                <View key = {index2} style = {[styles.GradesDisplay, {height: 10 * grades.second.length}]}>
                    <Text style={styles.textStyle}>{item2.subject}</Text>
                    <Text style={styles.textStyle}>{item2.grade}</Text>
                </View>
            ))}
        </View>
    );

    const thirdYear = () => (
        <View style = {[styles.gridContainer, {backgroundColor: "transparent"}]}>
            <View style={styles.TitleArea}>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.leftTitle}</Text>
                <Text style={{fontSize: 15 , fontWeight: "bold"}}>{gradeTitle.rightTitle}</Text>

            </View>
            {grades.third.map((item3, index3) => (
                <View key = {index3} style = {[styles.GradesDisplay,  {height: 10 * grades.third.length}]}>
                    <Text style={styles.textStyle}>{item3.subject}</Text>
                    <Text style={styles.textStyle}>{item3.grade}</Text>
                </View>
            ))}
        </View>
    );

    const initialLayout = { width: Dimensions.get('window').width};



    export default function Grades() {
        const [index, setIndex] = React.useState(0);


        const [routes] = React.useState([
            { key: 'first', title: '1.året'},
            { key: 'second', title: '2.året'},
            { key: 'third', title: '3.året'},
        ]);

        const renderScene = SceneMap({
            first: firstYear,
            second: secondYear,
            third: thirdYear,
        });

        const renderTabBar = props => (
            <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: '#97c556' }}
                style={{ backgroundColor: '#97c556' }}
                labelStyle={{color: 'black'}}
            />
        );

        return(
            <View style={styles.gridContainer}>

                <TabView navigationState={{index, routes}} renderScene={renderScene} onIndexChange={setIndex} initialLayout={initialLayout} renderTabBar={renderTabBar}/>

            </View>
        )

    }
const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
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
        flexShrink: 1,
        flexWrap: "wrap",
        alignItems: "center",

    },
    textStyle: {
        fontSize: 15,
        padding: '3%',
},

});

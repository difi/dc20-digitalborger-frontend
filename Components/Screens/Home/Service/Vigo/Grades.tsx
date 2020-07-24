import React, {useEffect, useState} from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {retrieveData} from "../../../../Storage";
import {getSubjectInfo} from "../../../../ServerCommunications/Services/VigoService";


const gradeTitle = {
        leftTitle: 'Fag',
        rightTitle: 'Karakterer',
        snitt: '5.2'

}
const snittRegnet = {
    description: 'Snitt:',
    snitt: '5.2'

}
    const initialLayout = { width: Dimensions.get('window').width};


    export default function Grades() {
        const [index, setIndex] = React.useState(0);
        const [grades, setGrades] = useState({first: [{absence: 0, grade: 0, subject: ""}], second: [{absence: 0, grade: 0, subject: ""}], third: [{absence: 0, grade: 0, subject: ""}], average: 0});

        const data = async () => {
            const pid = await retrieveData("pid");
            return await getSubjectInfo(pid);
        }

        useEffect(() => {
            data()
                .then(item => {setGrades(item); console.log(item)})
                .catch(err => console.log(err));
        },[]);



        //setter opp beskrivelses titler Fag og Karakterer
        const titleDescription = () => {

            return (
                <View style={styles.TitleArea}>
                    <Text style={styles.boldText}>{gradeTitle.leftTitle}</Text>
                    <Text style={styles.boldText}>{gradeTitle.rightTitle}</Text>

                </View>
            )

        }


        //Snittet for brukeren
        const averageEstimate = () => {

            return (
                <View>

                    <View style={{flexDirection: "row"}}>
                    <Text style={styles.boldText}>{snittRegnet.description + " "}</Text>
                    <Text style={styles.boldText}>{grades.average.toFixed(2)}</Text>
                </View>

                </View>


            )

        }


        const firstYear = () => (

            <View style = {[styles.gridContainer, {backgroundColor: "transparent"}]}>

                <View>{titleDescription()}</View>

                {grades.first.map((item1, index1) => (

                    <View key = {index1} style = {[styles.GradesDisplay, {height: 10 * grades.first.length}]}>
                        <Text style={styles.text}>{item1.subject}</Text>
                        <Text style={styles.text}>{item1.grade}</Text>
                    </View>
                ))}

                <View style={styles.averageContainer}>{averageEstimate()}</View>

            </View>
        );

        const secondYear = () => (
            <View style = {[styles.gridContainer, {backgroundColor: "transparent"}]}>

                <View>{titleDescription()}</View>

                {grades.second.map((item2, index2) => (

                    <View key = {index2} style = {[styles.GradesDisplay, {height: 10 * grades.second.length}]}>
                        <Text style={styles.text}>{item2.subject}</Text>
                        <Text style={styles.text}>{item2.grade}</Text>
                    </View>
                ))}

                <View style={styles.averageContainer}>{averageEstimate()}</View>

            </View>
        );

        const thirdYear = () => (
            <View style = {[styles.gridContainer, {backgroundColor: "transparent"}]}>

                <View>{titleDescription()}</View>

                {grades.third.map((item3, index3) => (
                    <View key = {index3} style = {[styles.GradesDisplay,  {height: 10 * grades.third.length}]}>
                        <Text style={styles.text}>{item3.subject}</Text>
                        <Text style={styles.text}>{item3.grade}</Text>
                    </View>
                ))}

                <View style={styles.averageContainer}>{averageEstimate()}</View>


            </View>
        );

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
    boldText: {
        fontSize: 15 ,
        fontWeight: "bold"
    },
    text: {
        fontSize: 15,
        marginTop: '3%',
        marginLeft: '3%',
        marginRight: '8%',
},
    averageContainer: {
        flexDirection: "row",
        marginRight: '2.6%',
        position: "absolute",
        bottom: 0,
        right: 0

    },


});

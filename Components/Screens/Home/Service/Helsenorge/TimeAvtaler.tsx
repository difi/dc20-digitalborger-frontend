import * as React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import * as WebBrowser from "expo-web-browser";

// @ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useEffect, useState} from "react";
import {retrieveData} from "../../../../Storage";
import {getAppointmentData} from "../../../../ServerCommunications/Services/HelseNorgeService";

const Avtaler = [
    {
        type: "Undersøkelse",
        place: "Haukeland Sykehus",
        clinic: "Poliklinikken",
        doctor: "Nils Nilsen",
        date: "2020-07-24",
        time: "11:20"

    },
    {
        type: 'Blodprøve',
        place: 'Oasen Legesenter',
        clinic: 'Inngang A ',
        doctor: "Kari Hansen",
        date: "2020-07-26",
        time: "09:00"
    },
    {
        type: 'CT undersøkelse',
        place: 'Rikshospitalet',
        clinic: 'Røntgenavdeling',
        doctor: "Jens Kversøy",
        date: "2020-08-03",
        time: "14:15"
    }
]


const legeKontor = {
    number: "55 17 50 90"
}


export default function TimeAvtaler() {

    const [prescriptionData, setPrescription ] = useState([
        { type: "", place: "", clinic: "", lege: "", dato: "", time: "" },
    ]);


    useEffect(() => {
        (async () => {
            const pid: number = await retrieveData("pid");
            let result = await getAppointmentData(pid);
            setPrescription(result);
        })();

        return(
            <View>
                {prescriptionData.map((avtale, i) =>(
                    <Text key={i}>{avtale.dato}</Text>
                ))}
            </View>
        )

    }, []);






    const mark = {
         [prescriptionData[0].dato]: {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" },


     };



     const item = {

         [prescriptionData[0].dato]: [{type: prescriptionData[0].type, place: prescriptionData[0].place, clinic: prescriptionData[0].clinic, doctor: prescriptionData[0].lege, time: prescriptionData[0].time }],



     }


     return(
        <View style={styles.container}>
            <Agenda

                        items={item}

                        markedDates={mark}
                        onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
                        onDayPress={(day)=>{console.log('day pressed')}}

                        loadItemsForMonth={(month) => {console.log('trigger items loading')}}

                        //Brukeren kan kun trykke på dagens dato eller frem i tid
                        minDate={Date()}

                        renderEmptyData = {() => {return (
                            <View style={styles.emptyDataContainer}>

                                <Text style={styles.emptyDataInfo}>Ingen time denne dagen</Text>

                                <View style={styles.topContainer}>
                                    <View style={styles.topContainerText}>
                                        <Text style={styles.text}>Ring ditt legekontor: </Text>
                                        <Text onPress={()=>{Linking.openURL("tel: " + legeKontor.number);}} style={{fontSize: 17, fontWeight:"bold"}}>{legeKontor.number}</Text>
                                    </View>

                                </View>

                                <View style={styles.bottomContainer}>
                                    <TouchableOpacity
                                        style={styles.linkContainer} onPress={() => WebBrowser.openBrowserAsync('https://helsenorge.no/kontakt-fastlegen/kom-i-kontakt')}>
                                        <Text style={styles.text}>Bestill time hos fastlege på nett</Text>
                                        <FontAwesome5 name={"arrow-right"} size={24}/>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        );}}


                        data={prescriptionData}
                        renderItem={(item) => {return(
                            <View style = {[styles.item, {height: item.height}]}>
                                <Text style={styles.boldText}>{item.type + " kl " + item.time}</Text>
                                <Text style={styles.text}>{"Lege: " + " " + item.doctor}</Text>
                                <Text style={styles.text}>{"Sted: " + item.place + ", " + item.clinic}</Text>

                            </View>);}}
                        keyExtractor={item => item.dato}
                />




        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
       flex: 1,
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 18
    },
    text : {
        fontSize: 17,

    },
    emptyDataContainer :{
        flex: 1,
        alignItems: "center"

    },
    emptyDataInfo : {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 40

    },
    linkContainer: {

        flexDirection: "row",
        justifyContent: "space-between",
        width: 260,

    },
    topContainerText:{
        flexDirection: "row",
        bottom: 7,
        left: 10,
    },
    topContainer:{
        borderBottomWidth: 1,
        borderBottomColor: "#E1E1E1",
        borderRadius: 20,

    },
    bottomContainer:{
        marginTop: 10,
        left: 10,
        flexDirection: "row",
    },



})
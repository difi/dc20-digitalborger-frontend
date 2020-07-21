import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useState} from "react";


const eventCalender = [

    {
        type: "Undersøkelse",
        place: "Haukeland Sykehus",
        clinic: "Poliklinikken",
        lege: "Nils Nilsen",
        dato: "2020-07-22",
        time: "11:20"

    },
    {
        type: 'Blodprøve',
        place: 'Oasen Legesenter',
        clinic: 'Inngang A ',
        lege: "Kari Hansen",
        dato: "2020-07-24",
        time: "09:00"
    },
    {
        type: 'CT undersøkelse',
        place: 'Rikshospitalet',
        clinic: 'Røntgenavdeling',
        lege: "Jens Kversøy",
        dato: "2020-08-03",
        time: "14:15"
    }
]

/**   <Calendar
 firstDay = {1}
 onDayPress={(day) => {console.log('selected day', day)}}
 markedDates={{
    '2020-07-22':{selected: true, marked: true, selectedColor: '#00bfff'}
}}/>**/
export default function Av() {



    const mark = {

        [eventCalender[0].dato]: {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" },
        [eventCalender[1].dato]: {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" },
        [eventCalender[2].dato]: {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" }
    };


    //Retunerer ukedagen fra dato string formatet
    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null :
            ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'][dayOfWeek];
    }

    //Retunerer dagen fra dato string formatet
    function getDay(date) {
        const day = new Date(date).getDate();
        return day
    }


    return(
        <View style={styles.container}>


                <View style={{height:400, width: 400 }}>
                    <CalendarList
                        markedDates={mark}

                        horizontal={true}
                        // Enable paging on horizontal, default = false
                        pagingEnabled={true}
                        // Set custom calendarWidth.
                        calendarWidth={400}

                        onDayPress={(day) => {console.log('selected day', day)}}

                    />

                </View>



              {eventCalender.map((item1, index1) => (
                <View  style={{flexDirection: "row"}}>

                    <View style={{flexDirection: "column"}}>
                        <Text style={styles.dateText}>{getDay(item1.dato)}</Text>
                        <Text style={styles.dayText}>{getDayOfWeek(item1.dato)}</Text>
                    </View>


                    <View style={styles.item}>
                        <Text style={styles.boldText}>{item1.type + " " + item1.time}</Text>
                        <Text style={styles.placeText}>{"Lege " + " " + item1.lege}</Text>
                        <Text style={styles.placeText}>{item1.place + ", " + item1.clinic}</Text>


                    </View>


                </View>
            ))}



        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        height: 100,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: 17,
        marginTop: 17,

    },
    boldText: {
        fontWeight: "bold",
        fontSize: 18
    },
    placeText:{
        fontSize: 16,

    },
    dateText: {
        fontSize: 24,
        color: "gray",
        fontWeight: "bold"


    },
    dayText: {
        fontSize: 17,
        color: "gray"
    }


})
import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useState} from "react";




const Avtaler = [
    {
        type: "Undersøkelse",
        place: "Haukeland Sykehus",
        clinic: "Poliklinikken",
        dato: "2020-07-22",
        time: "11:20"

    },
    {
        type: 'Blodprøve',
        place: 'Oasen Legesenter',
        clinic: 'Inngang A ',
        dato: "2020-07-24",
        time: "09:00"
    },
    {
        type: 'CT undersøkelse',
        place: 'Rikshospitalet',
        clinic: 'Røntgenavdeling',
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

        [Avtaler[0].dato]: {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" },
        [Avtaler[1].dato]: {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" },
        [Avtaler[2].dato]: {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" }
    };


    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null :
            ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'][dayOfWeek];
    }

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


              {Avtaler.map((item1, index1) => (
                <View key={0} style={{flexDirection: "row"}}>

                    <View style={{flexDirection: "column"}}>
                        <Text style={styles.dateText}>{getDay(item1.dato)}</Text>
                        <Text style={styles.dayText}>{getDayOfWeek(item1.dato)}</Text>
                    </View>


                    <View style={styles.item}>
                        <Text style={styles.text}>{item1.type + " " + item1.time}</Text>
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
    text: {
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
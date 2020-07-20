import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Avtaler = [
    {
        type: "Undersøkelse",
        place: "Haukeland Sykehus",
        clinic: "Polyklinikken",
        dato: "2020-08-01",
        time: "11:20"

    }
]

 /**   <Calendar
firstDay = {1}
onDayPress={(day) => {console.log('selected day', day)}}
markedDates={{
    '2020-07-22':{selected: true, marked: true, selectedColor: '#00bfff'}
}}/>**/
export default function TimeAvtaler() {
    return(
        <View style={styles.container}>
            {Avtaler.map((item, index) => (
                <Agenda key={0}

                    items={{
                        '2020-07-22': [{type: 'Hjerteundersøkelse', place: 'Haukeland Sykehus', clinic: 'Poliklinikken', time: "11:20" }],
                        '2020-07-31': [{type: 'Blodprøve', place: 'Oasen Legesenter', clinic: 'Inngang A ', time: "09:00"}],
                        '2020-08-04': [{type: 'CT undersøkelse', place: 'Rikshospitalet', clinic: 'Røntgenavdeling', time: "14:15" }]
                    }}

                    markedDates={{
                        '2020-07-22': {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" },
                        '2020-07-31': {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f"  },
                        '2020-08-04': {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" }
                    }}
                        onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
                        onDayPress={(day)=>{console.log('day pressed')}}

                        renderEmptyData = {() => {return (<View />);}}



                        renderItem={(item) => {return(
                            <View style = {[styles.item, {height: item.height}]}>
                                <Text style={styles.text}>{item.type + " kl " + item.time}</Text>
                                <Text>{item.place + ", " + item.clinic}</Text>

                            </View>);}}
                />

            ))}

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
    text: {
        fontWeight: "bold",
        fontSize: 16
    }


})

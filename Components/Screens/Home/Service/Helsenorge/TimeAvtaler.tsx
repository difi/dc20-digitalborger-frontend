import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

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
        dato: "2020-08-01",
        time: "14:15"
    }
]

 /**   <Calendar
firstDay = {1}
onDayPress={(day) => {console.log('selected day', day)}}
markedDates={{
    '2020-07-22':{selected: true, marked: true, selectedColor: '#00bfff'}
}}/>**/
export default function TimeAvtaler() {



     const mark = {
         [Avtaler[0].dato]: {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" },
         [Avtaler[1].dato]: {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" },
         [Avtaler[2].dato]: {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" }
     };

     const item = {
         [Avtaler[0].dato]: [{type: Avtaler[0].type, place: Avtaler[0].place, clinic: Avtaler[0].clinic, time: Avtaler[0].time }],
         [Avtaler[1].dato]:  [{type: Avtaler[1].type, place: Avtaler[1].place, clinic: Avtaler[1].clinic, time: Avtaler[1].time }],
         [Avtaler[2].dato]: [{type: Avtaler[2].type, place: Avtaler[2].place, clinic: Avtaler[2].clinic, time: Avtaler[2].time }],

     }

     return(
        <View style={styles.container}>

                <Agenda key={0}

                    items={item}

                    markedDates={mark}
                        onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
                        onDayPress={(day)=>{console.log('day pressed')}}

                        loadItemsForMonth={(month) => {console.log('trigger items loading')}}

                        renderEmptyData = {() => {return (<View />);}}


                        renderItem={(item) => {return(
                            <View style = {[styles.item, {height: item.height}]}>
                                <Text style={styles.text}>{item.type + " kl " + item.time}</Text>
                                <Text>{item.place + ", " + item.clinic}</Text>

                            </View>);}}
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
    text: {
        fontWeight: "bold",
        fontSize: 16
    }


})

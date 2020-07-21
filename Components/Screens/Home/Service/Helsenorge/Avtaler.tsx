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
export default function Av() {
    return(
        <View style={styles.container}>

            <View style={{flex: 1}}>

                <View style={{height:400, width: 400 }}>
                    <CalendarList

                        markedDates={{
                            '2020-07-22': {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" },
                            '2020-07-31': {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f"  },
                            '2020-08-04': {marked: true , selectedColor: "#9a1c6f", dotColor: "#9a1c6f" }
                        }}

                        horizontal={true}
                        // Enable paging on horizontal, default = false
                        pagingEnabled={true}
                        // Set custom calendarWidth.
                        calendarWidth={400}

                        onDayPress={(day)=>{console.log('day pressed')}}


                    />


                </View>


            </View>
            {Avtaler.map((item1, index1) => (

                <View key={0} style={{flexDirection: "row"}}>

                    <View style={{flexDirection: "column"}}>
                        <Text style={styles.dateText}>22</Text>
                        <Text style={styles.dayText}>onsdag</Text>
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
        height: 120,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: 17,
        marginTop: 17,
        padding: '2%',
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
import * as React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";


const Betalinger = [
    {
        date: '16.04.2020',
        occurrence: 'Utbetaling',
        sum: 11020.00,
    },
    {
        date: '15.03.2020',
        occurrence: 'Utbetaling',
        sum: 8265.00,
    },
    {
        date: '14.02.2020',
        occurrence: 'Utbetaling',
        sum: 8265.00,
    },
    {
        date: '15.01.2020',
        occurrence: 'Utbetaling',
        sum: 20100.00,

    }]


export default function Utbetaling() {

    return(
        <View style={styles.container}>

            <View style = {styles.titleHeader}>
                <Text>Dato</Text>
                <Text>Hendelse</Text>
                <Text>Beløp</Text>
            </View>


        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 100,
      height: 100,

    },
    titleHeader: {
        backgroundColor: 'purple'

    }

})
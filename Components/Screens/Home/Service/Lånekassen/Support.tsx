import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";


const SupportForStudent = [
    {
        title: "Utstyrsstipend",
        sum: "1 660.00",
    },
    {
        title: "Borteboerstipend",
        sum: "43 753.00",
    },
    {
        title: "Stipend",
        sum: "13 626.00",
    },
    {
        title: "Neste Utbetaling",
        sum: "346 862.21",
    }
]



export default function Support(){
    return(
        <View style={{flex:1}}>
            <Text style={styles.textInfo}>Gjennomsnittstøtte i vanlig videregående opplæring: </Text>

            {SupportForStudent.map((item, index) => (
                <View key = {index} style={styles.listContainer}>
                    <Text style={styles.listText}>{item.title}</Text>
                    <Text style={
                        {fontWeight: item.title == "Neste Utbetaling" ? "bold": "normal",
                            fontSize: 16,
                            textDecorationLine: item.title == "Neste Utbetaling" ? "underline": "none",
                        } }>{item.sum + " kr"}</Text>
                </View>

            ))}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',

    },
    textInfo: {
        fontSize: 15,
        fontStyle: "italic",

    },
    listContainer: {
      flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        padding: "5%"
    },
    listText: {
        fontSize: 16,
    }

})
import React from "react";
import {StyleSheet, Text, View} from "react-native";

const absenceTitle = {
    leftTitle: 'Fag',
    rightTitle: 'Fravær',

}
const absence = [
    {
        subject: 'RLE',
        absence: 0.1,
    },
    {
        subject: 'Naturfag',
        absence: 0.04,
    },
    {
        subject: 'Matematikk',
        absence: 0.02,
    },
    {
        subject: 'Norsk',
         absence: 0.12,
    },
    {
        subject: 'Engelsk',
        absence: 0.06,

    },
    {
        subject: 'Gym',
        absence: 0.03,
    },

];

  export default function Absence() {

      /**
       * En funksjon for å sjekke om fravær når 10 prosent
       */

      function limitReached(absence: number ) {
          if(absence.valueOf() >= 0.1 ){
            return true
          }
          else{
              return false

          }

      }
      return(
          <View style={styles.gridContainer}>

              <View style={styles.absenceContainer}>
                  <Text style={styles.textTitle}> {absenceTitle.leftTitle} </Text>
                  <Text style={styles.textTitle}> {absenceTitle.rightTitle}</Text>
              </View>
              {absence.map((item, index) => (
                  <View
                      key = {index}
                      style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexShrink: 1,
                      flexWrap: "wrap",
                      height: 10 * absence.length,
                      backgroundColor: limitReached(item.absence) ? 'rgba(240,128,128,0.76)': "transparent"}}>
                      <Text style={styles.textAbsence} allowFontScaling={true}>{item.subject}</Text>
                      <Text style={styles.textAbsence} allowFontScaling={true}>{item.absence * 100 + "%"}</Text>

                  </View>
              ))}

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
    absenceContainer: {
      flexDirection: "row",
        justifyContent: "space-between",
        padding: '3%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: "transparent",
    },
    textTitle: {
        fontSize: 15,
        fontWeight: "bold",
        margin: 5,
        justifyContent: "space-around",
        borderBottomColor: 'gray',

    },
    textAbsence: {
        fontSize: 15,
        margin: 5,
        padding: '3%'

    }


});


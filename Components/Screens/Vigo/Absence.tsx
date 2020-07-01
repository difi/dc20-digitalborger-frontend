import * as React from "react";
import {useState} from "react";
import {StyleSheet, Text, View} from "react-native";



const absenceTitle = {
    leftTitle: 'Fag',
    rightTitle: 'Fravær',

}

const absenceInSubjects = [
    {
        sub: 'RLE',
        absence: 0.1,
    },
    {
        sub: 'Naturfag',
        absence: 0.04,
    },
    {
      sub: 'Matematikk',
      absence: 0.02,
    },

];




  export default function Absence() {

      /**
       * En funksjon for å markere fravær over 10 prosent
       */

      function limitReached(absence: number ) {
          if(absence.valueOf() >= 0.1 ){
              {styles.absenceContainer = {
                  flexDirection: "row",
                  margin: '5%',
                  justifyContent: "space-around",
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  backgroundColor: 'rgba(240,128,128,0.76)'}}
          }


      }


      return(
          <View style={styles.container}>

              <View style={styles.absenceContainer}>
                  <Text style={styles.textHeader}> {absenceTitle.leftTitle} </Text>
                  <Text style={styles.textHeader}> {absenceTitle.rightTitle}</Text>
              </View>
              {absenceInSubjects.map((item, index) => (
                  <View style={styles.absenceContainer}>
                      <Text style={styles.textCenter}>{item.sub}</Text>
                      <Text style={styles.textCenter}>{item.absence * 100 + "%"}</Text>



                  </View>
              ))}

          </View>

      )

  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dcdcdc",

    },
    absenceContainer: {
      flexDirection: "row",
        margin: '5%',
        justifyContent: "space-around",
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: "#dcdcdc"


    },

    textHeader: {
        fontSize: 15,
        fontWeight: "bold",
        padding: 5,
        margin: 5,
        justifyContent: "space-around",
        borderBottomColor: 'gray',

    },
    textCenter: {
        fontSize: 15,
        padding: 5,
        margin: 5,

    },


});

  // { absence * 100 + "%"}
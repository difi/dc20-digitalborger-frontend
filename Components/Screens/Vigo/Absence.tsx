import React from "react";
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
    {
      sub: 'Norsk',
      absence: 0.12,
    },
    {
      sub: 'Engelsk',
      absence: 0.06,

    },
    {
      sub: 'Gym',
      absence: 0.03,
    }

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
          <View style={styles.container}>

              <View style={styles.absenceContainer}>
                  <Text style={styles.textHeader}> {absenceTitle.leftTitle} </Text>
                  <Text style={styles.textHeader}> {absenceTitle.rightTitle}</Text>
              </View>
              {absenceInSubjects.map((item, index) => (
                  <View style={{
                      flexDirection: "row",
                      padding: '3%',
                      borderBottomColor: 'gray',
                      borderBottomWidth: 1,
                      justifyContent: "space-between",

                      backgroundColor: limitReached(item.absence) ? 'rgba(240,128,128,0.76)': "#dcdcdc"}}>


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
        width: "100%",
        height: "100%"


    },
    absenceContainer: {
      flexDirection: "row",
        justifyContent: "space-between",
        padding: '3%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: "#dcdcdc",


    },
    textHeader: {
        fontSize: 15,
        fontWeight: "bold",
        margin: 5,
        justifyContent: "space-around",
        borderBottomColor: 'gray',


    },
    textCenter: {
        fontSize: 15,
        margin: 5,


    }


});

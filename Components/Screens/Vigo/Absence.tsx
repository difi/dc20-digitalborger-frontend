import * as React from "react";
import {useState} from "react";
import {StyleSheet, Text, View} from "react-native";


const absenceInSubjects =
    {
        leftTitle: 'Fag',
        rightTitle: 'Fravær',

        sub1: 'RLE',
        sub2: 'Naturfag',
        sub3: 'Matematikk',

        absence1:'10%',
        absence2: '4%',
        absence3: '2%'
    }



/**
 * En funksjon for å markere fravær over 10 prosent
 */

function limitReached() {
    const [warning, setWarning] = useState(false);

}


  export default function Absence() {

      return(
          <View style={styles.container}>

              <View style={styles.absenceContainer}>
                  <Text style={styles.textHeader}> {absenceInSubjects.leftTitle} </Text>
                  <Text style={styles.textHeader}> {absenceInSubjects.rightTitle}</Text>
              </View>
              <View style={styles.absenceContainer}>
                  <Text style={styles.textCenter}>{absenceInSubjects.sub1}</Text>
                  <Text style={styles.textCenter}>{absenceInSubjects.absence1}</Text>

              </View>
              <View style={styles.absenceContainer}>
                  <Text style={styles.textCenter}>{absenceInSubjects.sub2}</Text>
                  <Text style={styles.textCenter}>{absenceInSubjects.absence2}</Text>
              </View>

              <View style={styles.absenceContainer}>
                  <Text style={styles.textCenter}>{absenceInSubjects.sub3}</Text>
                  <Text style={styles.textCenter}>{absenceInSubjects.absence3}</Text>
              </View>


          </View>

      );

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

    }


});
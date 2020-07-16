import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {retrieveData} from "../../../../Storage";
import {getSubjectInfo} from "../../../../ServerCommunications/Services/VigoService";

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
      const [absenceData, setAbsence] = useState([{absence: 0, grade: 0, subject: ""}]);

      const data = async () => {
          const pid: number = await retrieveData("pid");
          return await getSubjectInfo(pid);
      }

      useEffect(() => {
              data()
                  .then(item => {setAbsence(item.third); console.log(item.third);})
                  .catch(err => console.log(err));
      },[]);

      function limitReached(absence: number ) {
          return absence.valueOf() >= 0.1;
      }

      return(
          <View style={styles.gridContainer}>

              <View style={styles.absenceContainer}>
                  <Text style={styles.textTitle}> {absenceTitle.leftTitle} </Text>
                  <Text style={styles.textTitle}> {absenceTitle.rightTitle}</Text>
              </View>
              {absenceData.map((item, index) => (
                  <View
                      key = {index}
                      style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexShrink: 1,
                      flexWrap: "wrap",
                      height: 10 * absence.length, //TODO change this to absenceData.length and remove hardcoded "absence" variable
                      backgroundColor: limitReached(item.absence) ? 'rgba(240,128,128,0.76)': "transparent"}}>
                      <Text style={styles.textAbsence} allowFontScaling={true}>{item.subject}</Text>
                      <Text style={styles.textAbsence} allowFontScaling={true}>{Math.ceil(item.absence * 100) + "%"}</Text>

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


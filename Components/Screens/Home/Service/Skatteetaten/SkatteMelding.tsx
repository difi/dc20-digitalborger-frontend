import * as React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {black} from "react-native-paper/lib/typescript/src/styles/colors";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { retrieveData } from "../../../../Storage";
import { getDoctorData } from "../../../../ServerCommunications/Services/HelseNorgeService";
import { getSkattInfo } from "../../../../ServerCommunications/Services/SkatteetatenService";
import Button from "../assets/Button";



export default function SkatteMelding() {
  const [taxData, setTax] = useState({
    Skatt: { inntekt: 0, beregnet: 0, trekk: 0 },
    Arbeidsgiver: [{ company: "", date: "" }],
  });

  useEffect(() => {
    (async () => {
      const pid: number = await retrieveData("pid");
      let result = await getSkattInfo(pid);
      setTax(result);
    })();
  }, []);


    return(
      <View style={styles.gridContainer}>


        <View style={styles.InfoContainer}>
          <Text style={styles.skattTitle}>Beregnet inntekt for 2020:</Text>
          <Text style={styles.skattInput}>{taxData.Skatt.inntekt + " kr"}</Text>

        </View>

        <View style={styles.meldingDivider}></View>

          <View style={styles.InfoContainer}>
              <Text style={styles.skattTitle}>Totalt beregnet skatt 2020:</Text>
              <Text style={styles.skattInput}>{taxData.Skatt.beregnet + " kr"}</Text>

          </View>

          <View style={styles.meldingDivider}></View>

      <View style={styles.InfoContainer}>
        <Text style={styles.skattTitle}>Skattetrekk på hovedinntekt:</Text>
        <Text style={styles.skattInput}>{taxData.Skatt.trekk * 100 + "%"}</Text>
      </View>
        <View style={styles.buttonContainer}>
          <Button label={"Se hele skattemeldingen din"} color={"#6f2c3f"} onPress={() =>
              WebBrowser.openBrowserAsync(
                  "https://www.skatteetaten.no/person/skatt/skatteoppgjor/"
              )} textColor={"white"}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  meldingDivider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  InfoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  skattTitle: {
    fontSize: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  skattInput: {
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonContainer: {
    margin: "10%",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});

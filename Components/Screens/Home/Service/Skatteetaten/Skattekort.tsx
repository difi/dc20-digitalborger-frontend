import * as React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import Button from "../assets/Button";


export default function Skattekort() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>
        {'\u30FB'}Tjener du mer en 55 000 kroner burde du søke om skattekort.
      </Text>
      <Text style={styles.boldText}>
        {'\u30FB'}Arbeidsgiver trekker 50 prosent skatt av inntekten du tjener over frikortgrensen.
      </Text>
      <View style={styles.buttonContainer}>
        <Button label={"Bestill skattekort her "} color={"#6f2c3f"} onPress={() =>
            WebBrowser.openBrowserAsync(
                "https://www.skatteetaten.no/person/skatt/skattekort/bestille-endre/"
            )} textColor={"white"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
  },
  boldText: {
    fontSize: 15,
    margin: 10,
    bottom: "2%",
  },
  buttonContainer: {
    margin: "10%",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },

});

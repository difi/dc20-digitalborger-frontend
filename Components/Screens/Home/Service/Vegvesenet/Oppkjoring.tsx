import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import Button from "../assets/Button";

export default function Oppkjoring() {
  return (
    <View style={styles.gridContainer}>
      <Text style={styles.buttonText}>
        Bestilling av oppkjøring må gjøres av din trafikkskole. Til dette
        trenger trafikkskolen en fullmakt fra deg.
      </Text>
      <View style={styles.buttonContainer}>
        <Button label={" Gi fullmakt"} color={"#DA3737"} onPress={() =>
            WebBrowser.openBrowserAsync(
                "https://www.vegvesen.no/dinside/dittforerkort/timebestilling/timer"
            )} textColor={"white"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    height: "auto",
    width: "100%",
  },
  buttonText: {
    fontSize: 15,
    margin: 10,
  },
  buttonContainer: {
    margin: "10%",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },

});

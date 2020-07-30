import * as React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as WebBrowser from "expo-web-browser";
import Button from "../assets/Button";


export default function Frikort() {
  return (
    <View style={styles.gridContainer}>
      <Text style={styles.infoText}>
        Et frikort er et skattekort som viser at arbeidsgiver ikke skal trekke
        skatt dersom du tjener 55 000 kroner eller mindre i løpet av året.{" "}
        {"\n"}{" "}
      </Text>
      <View style={styles.buttonContainer}>
        <Button label={"Bestill frikort her "} color={"#6f2c3f"} onPress={() =>
            WebBrowser.openBrowserAsync(
                "\"https://www.skatteetaten.no/person/skatt/skattekort/frikort/bestille-frikort/"
            )} textColor={"white"}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
  },
  infoText: {
    fontSize: 15,
    marginHorizontal: "2%",
    marginTop: "2%",
  },
  buttonContainer: {
    margin: "10%",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },

});

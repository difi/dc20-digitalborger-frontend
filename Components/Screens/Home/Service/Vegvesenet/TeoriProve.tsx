import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import Button from "../assets/Button";

export default function TeoriProve() {
  return (
    <View style={styles.gridContainer}>
      <Text style={styles.buttonText}>
        Bestilling av time til teoriprøven gjøres på vegvesenet sine nettsider.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          label={" Gå til timebestilling"}
          color={"#DA3737"}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://ventus.enalog.se/Booking/Booking/Index/VegvesenRislokka"
            )
          }
          textColor={"white"}
        />
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

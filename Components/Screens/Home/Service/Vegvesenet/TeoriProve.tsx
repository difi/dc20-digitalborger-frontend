import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

export default function TeoriProve() {
  return (
    <View style={styles.gridContainer}>
      <Text style={styles.buttonText}>
        Bestilling av time til teoriprøven gjøres på vegvesenet sine nettsider.
      </Text>

      <TouchableOpacity
        containerStyle={styles.linkContainer}
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://ventus.enalog.se/Booking/Booking/Index/VegvesenRislokka"
          )
        }
      >
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}> Gå til timebestilling</Text>
          <Icon name="arrow-right-circle-outline" size={20}></Icon>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    borderWidth: 5,
    borderColor: "#e6e6e6",
    height: "auto",
    width: "100%",
  },
  buttonText: {
    fontSize: 15,
    margin: 10,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    alignSelf: "flex-end",
    marginEnd: 5,
  },

  linkText: {
    fontSize: 15,
    paddingLeft: 10,
    marginRight: 5,
  },
});

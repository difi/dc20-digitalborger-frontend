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
          <Icon name="arrow-right-circle-outline" size={40}></Icon>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    borderWidth: 5,
    borderColor: "#e6e6e6",
    height: 150,
    width: "100%",
  },
  buttonText: {
    fontSize: 20,
    margin: 10,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "flex-end",
  },

  linkText: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 6,
    marginRight: 8,
  },
});

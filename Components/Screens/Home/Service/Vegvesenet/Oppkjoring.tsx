import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

export default function Oppkjoring() {
  return (
    <View style={styles.gridContainer}>
      <Text style={styles.buttonText}>
            Bestilling av oppkjøring må gjøres av din trafikkskole. Til dette trenger trafikkskolen en fullmakt fra deg. 
      </Text>

      <TouchableOpacity
        containerStyle={styles.linkContainer}
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://www.vegvesen.no/dinside/dittforerkort/timebestilling/timer"
          )
        }
      >
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}> Gi fullmakt </Text>
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
    height: 170,
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

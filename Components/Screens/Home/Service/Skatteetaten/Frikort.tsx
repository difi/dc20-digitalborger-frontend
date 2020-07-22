import * as React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as WebBrowser from "expo-web-browser";

export default function Frikort() {
  return (
    <View style={styles.gridContainer}>
      <Text style={styles.infoText}>
        Et frikort er et skattekort som viser at arbeidsgiver ikke skal trekke
        skatt dersom du tjener 55 000 kroner eller mindre i løpet av året.{" "}
        {"\n"}{" "}
      </Text>

      <TouchableOpacity
        style={styles.LinkContainer}
        onPress={() =>
            WebBrowser.openBrowserAsync("https://www.skatteetaten.no/person/skatt/skattekort/frikort/bestille-frikort/")
        }
      >
        <FontAwesome key={0} name={"arrow-circle-right"} size={20} />
        <Text style={styles.buttonText}>Bestill frikort her</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    height: 180,
    width: "100%",
  },

  infoText: {
    margin: "5%",
    fontSize: 15,
  },

  LinkContainer: {
    margin: "5%",
    flexDirection: "row",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

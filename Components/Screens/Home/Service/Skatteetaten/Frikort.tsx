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
          WebBrowser.openBrowserAsync(
            "https://www.skatteetaten.no/person/skatt/skattekort/frikort/bestille-frikort/"
          )
        }
      >
        <Text style={styles.buttonText}>Bestill frikort her</Text>
        <FontAwesome key={0} name={"arrow-circle-right"} size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    height: "auto",
    width: "100%",
  },

  infoText: {
    fontSize: 15,
    marginHorizontal: "2%",
    marginTop: "2%",
  },

  LinkContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 10,
    marginTop: 2,
  },
});

import * as React from "react";
import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { Header, Button } from "react-native-elements";
import UserInfo from "./UserInfo";
import Icon from "react-native-vector-icons/Entypo";

export default function Profile() {
  return (
    <View>
      <Header centerComponent={{ text: "Min profil" }} />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => Linking.openURL("https://www.digipost.no/")}
      >
      <Icon name="mail-with-circle" color="green" size="50"></Icon>
      </TouchableOpacity>
      <UserInfo />

      <View style={styles.linksContainer}>
        <View style={styles.linkText}>
          <Icon name="export" size={20} />
          <Button
            title="ENDRE E-POST ELLER MOBIL"
            titleStyle={{ color: "black" }}
            buttonStyle={{ backgroundColor: "pink" }}
            onPress={() =>
              Linking.openURL(
                "https://www.skatteetaten.no/person/folkeregister"
              )
            }
          ></Button>
        </View>
      </View>

      <View style={styles.linksContainer}>
        <View style={styles.linkText}>
          <Icon name="export" size={20} />
          <Button
            title="ENDRE NAVN ELLER ADRESSE"
            titleStyle={{ color: "black" }}
            buttonStyle={{ backgroundColor: "pink" }}
            onPress={() =>
              Linking.openURL(
                "https://brukerprofil.difi.no/minprofil/?goto=https://sok.samordnaopptak.no/"
              )
            }
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 55,
    width: 55,
    alignSelf: "flex-end",
  },
  linksContainer: {
    left: 20,
    marginTop: 20,
  },
  linkText: { flexDirection: "row", alignItems: "center" },
});

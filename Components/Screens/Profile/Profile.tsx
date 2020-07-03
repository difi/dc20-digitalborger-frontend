import * as React from "react";

import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "react-native-elements";
import UserInfo from "./UserInfo";

const persons = {
  name: "Linda Hansen",
  birth: "01.01.2002",
  address: "Dalen 24",
  streetAddress: "Leikanger 6863",
  email: "Linda.Hansen@gmail.com",
  number: "12345678",
};

const digiPostBrev = {
  letter: "Digipost",
  amount: "2",
};

const uri = [
  {
    epostIcon:
      "https://seeklogo.com/images/M/mail-icon-logo-28FE0635D0-seeklogo.com.png",
    userIcon: "https://www.freeiconspng.com/uploads/profile-icon-28.png",
  },
];
// Slutt data

export default function Profile() {
  return (
      <View style={styles.container}>
        <Header backgroundColor="#93E6F3" centerComponent={{ text: "Min profil" }} />
        <View style={styles.upperScreen}>
          <TouchableOpacity
            style={styles.upperButtonContainer}
            onPress={() => Linking.openURL("https://www.digipost.no/")}
          >
            <Image source={{ uri: uri[0].epostIcon }} style={styles.images} />
            <Text style={styles.digipost}>
              {" " + digiPostBrev.letter + "(" + digiPostBrev.amount + ")"}
            </Text>
          </TouchableOpacity>
        </View>
        <UserInfo />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    backgroundColor: "red",

  },
  upperScreen: {
    height: "12%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },

  upperButtonContainer: {
    margin: 10,
    height: 40,
    width: 40,
    borderRadius: 5,
    backgroundColor: "blue",
    alignSelf: "flex-end",
  },

  images: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },


  title: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "bold",


  },
});

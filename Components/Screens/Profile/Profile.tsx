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
      <Header backgroundColor="white" centerComponent={{ text: "Profil" }} />
      <View style={styles.upperScreen}>
        <Text style={styles.title}>Person-og kontaktinformasjon</Text>
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
    flex: 1,
    backgroundColor: "#87CEEB",
  },
  upperScreen: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
    backgroundColor: "purple",
  },
  upperButtonContainer: {
    margin: 10,
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: "purple",
  },
  images: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "pink",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "orange",
  },
  digipost: {
    fontSize: 9,
    fontWeight: "bold",
    color: "red",
    alignItems: "center",
    backgroundColor: "white",
  },
});

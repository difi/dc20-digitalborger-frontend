import * as React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Header } from "react-native-elements";
import UserInfo from "./UserInfo";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import Digipost from "./Digipost";
import Mail from "./Mail";
import * as WebBrowser from "expo-web-browser";

const Stack = createStackNavigator();

function ProfileContent({ navigation }) {
  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate("Digipost")}
      >
        <EntypoIcon name="mail" size={40}></EntypoIcon>
      </TouchableOpacity>
      <View style={styles.profilIcon}>
        <FontAwesomeIcon name="user-circle" size={130} />
      </View>
      <UserInfo />
      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.links}
          onPress={() =>
              WebBrowser.openBrowserAsync("https://www.skatteetaten.no/person/folkeregister")
          }
        >
          <EntypoIcon name="export" size={20} />
          <Text> ENDRE NAVN ELLER ADRESSE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.links}
          onPress={() =>
              WebBrowser.openBrowserAsync("https://brukerprofil.difi.no/minprofil/?goto=https://sok.samordnaopptak.no/")
          }
        >
          <EntypoIcon name="export" size={20} />
          <Text> ENDRE E-POST ELLER MOBIL</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Profil"} component={ProfileContent} />
      <Stack.Screen name={"Digipost"} component={Digipost} />
      <Stack.Screen name={"Mail"} component={Mail} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 55,
    width: 55,
    alignSelf: "flex-end",
    marginTop: 5,
  },
  profilIcon: {
    alignSelf: "center",
    bottom: 10,
  },
  linksContainer: {
    top: "10%",
    left: 30,
    height: "10%",
  },
  links: {
    flexDirection: "row",
    alignItems: "center",
  },
});

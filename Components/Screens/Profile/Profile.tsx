import * as React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { Header } from "react-native-elements";
import UserInfo from "./UserInfo";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import Mail from "./Mail";
import * as WebBrowser from "expo-web-browser";
import Digipost from "./Digipost";
import Icon from "react-native-vector-icons/AntDesign";

const Stack = createStackNavigator();

export default function () {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#64D2FF" }}>
        <View style={styles.profile}>
          <View
            style={{
              //backgroundColor: "azure",
              width: "80%",
              alignSelf: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Text style={styles.name}>Hege Aalvik</Text>
              <View style={{ paddingTop: 10 }}>
                <Icon name="edit" size={20} color="white"></Icon>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.adress}>Lekvebakken 9.</Text>
              <Text style={styles.email}>5704 Voss</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.adress}>Hegeaal@gmail.com</Text>
              <Text style={styles.email}>40470029</Text>
            </View>
          </View>
        </View>
        <Digipost />
      </ScrollView>
    </SafeAreaView>
  );

  /*return (
    <ScrollView>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate("Digipost")}
      >
          <Image source={ require("./assets/test.png")} style={[{width: "80%", height: "80%", alignSelf: "center", justifyContent: "center", borderRadius: 10}]} resizeMode={"contain"}/>
          <Text>Digipost</Text>
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
  );*/
}

/*export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Profil"} component={ProfileContent} />
      <Stack.Screen name={"Mail"} component={Mail} />
    </Stack.Navigator>
  );
}*/

const styles = StyleSheet.create({
  profile: {
    height: 90,
    width: "100%",
    backgroundColor: "#64D2FF",
    //borderBottomLeftRadius: 500,
    //borderBottomRightRadius: 500,
    //shadowColor: "grey",
    //shadowOpacity: 15,
    //shadowRadius: 10,
    //opacity: 0.5,
    alignSelf: "center",
  },
  name: {
    alignSelf: "center",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    color: "white",
    shadowOpacity: 0.1,
    shadowColor: "white",
  },
  adress: {
    paddingRight: 100,
    fontFamily: "Helvetica",
    fontSize: 15,
    color: "white",
    shadowOpacity: 0.1,
    shadowColor: "white",
  },
  email: {
    fontFamily: "Helvetica",
    fontSize: 15,
    position: "absolute",
    right: 0,
    color: "white",
    shadowOpacity: 0.5,
    shadowColor: "white",
  },
  phone: { fontFamily: "Helvetica", fontSize: 15 },
  icon: {
    height: 55,
    width: 55,
    alignSelf: "flex-end",
    marginTop: 15,
    marginRight: 15,
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

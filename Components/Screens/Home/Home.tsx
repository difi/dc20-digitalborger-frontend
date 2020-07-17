import * as React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Login from "../../Login/Login";
import ScreenTabs from "../ScreenTabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Vigo } from "./Service/Vigo/Vigo";
import { Skatteetaten } from "./Service/Skatteetaten/Skatteetaten";
import { Vegvesenet } from "./Service/Vegvesenet/Vegvesenet";
import {Lanekassen} from "./Service/Lånekassen/Lånekassen";
import {Politi} from "./Service/Politi/Politi";
import {Helsenorge} from "./Service/Helsenorge/Helsenorge";

const PopularServices = [
  {
    name: "Karakterer",
    uri: "https://www.kommunaljobb.no/files/pictures/vigo_logo.jpg",
  },
  {
    name: "Søk frikort",
    uri:
      "https://pbs.twimg.com/profile_images/685006400632827904/l8cgvWEZ_400x400.jpg",
  },
  {
    name: "Forny resept",
    uri:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
  },
  {
    name: "Oppkjøring",
    uri:
      "https://www.sisteskrik.no/sites/miljoloftet_moss/wp-content/uploads/2019/05/Vegvesen_logo_200x141.png",
  },
  {
    name: "Vegvesnet",
    uri:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
  },
  {
    name: "Lånekassen",
    uri:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
  },
  {
    name: "Vegvesnet",
    uri:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
  },
  {
    name: "Lånekassen",
    uri:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
  },
];

const services = [
  {
    name: "Vigo",
    uri: "https://www.kommunaljobb.no/files/pictures/vigo_logo.jpg",
  },
  {
    name: "Vegvesenet",
    uri:
      "https://www.sisteskrik.no/sites/miljoloftet_moss/wp-content/uploads/2019/05/Vegvesen_logo_200x141.png",
  },
  {
    name: "Skatteetaten",
    uri:
      "https://pbs.twimg.com/profile_images/685006400632827904/l8cgvWEZ_400x400.jpg",
  },
  {
    name: "Lånekassen",
    uri:"https://pbs.twimg.com/profile_images/1237666131407785984/rVBZZwGk.jpg",
  },
  {
    name: "Politiet",
    uri: "https://kommunikasjon.ntb.no/data/images/00987/776f818b-f8b4-41ff-a496-e8250e26788c.png/social",
  },
  {
    name: "Helsenorge",
    uri: "https://kommunikasjon.ntb.no/data/images/00987/776f818b-f8b4-41ff-a496-e8250e26788c.png/social",
  },
];

//TODO: remove, temporary for design
function calculateHeightOfCircle(offset: number) {
  return Dimensions.get("window").width / 2 - offset;
}

const Stack = createStackNavigator();

function AllServices({ navigation }) {
  return (
    <SafeAreaView style={styles.gridContainer}>
      <ScrollView
        style={styles.gridContainer}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={stylesTop.gridContainer}
          data={PopularServices}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() => console.log("index clicked", index)}
              style={stylesTop.item}
            >
              <View style={stylesTop.imageContainer}>
                <Image
                  source={{ uri: item.uri }}
                  resizeMethod={"resize"}
                  style={stylesTop.image}
                />
              </View>
              <View style={stylesTop.textContainer}>
                <Text style={stylesTop.buttonText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <View style={stylesBottom.gridContainer}>
          {services.map((service, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(service.name)}
              key={index}
              style={stylesBottom.item}
            >
              <Image
                source={{ uri: service.uri }}
                resizeMethod={"resize"}
                style={stylesBottom.image}
              />
              <View style={stylesBottom.textContainer}>
                <Text style={stylesBottom.buttonText}>{service.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Offentlige tjenester"} component={AllServices} />
      <Stack.Screen name={"Vigo"} component={Vigo} />
      <Stack.Screen name={"Skatteetaten"} component={Skatteetaten} />
      <Stack.Screen name={"Vegvesenet"} component={Vegvesenet}/>
      <Stack.Screen name={"Lånekassen"} component={Lanekassen}/>
      <Stack.Screen name={"Politiet"} component={Politi} />
      <Stack.Screen name={"Helsenorge"} component={Helsenorge} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  gridContainer: { flex: 1 },
});

const stylesTop = StyleSheet.create({
  gridContainer: {
    paddingBottom: 10,
    paddingTop: 10,
    flex: 1,
    borderBottomWidth: 2,
    borderColor: "#C0C0C0",
  },
  item: {
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 20,
    alignItems: "center",
  },
  imageContainer: { height: 50, width: 50 },
  image: { width: "100%", height: "100%", borderRadius: 100 },
  textContainer: { alignSelf: "center", marginTop: 10 },
  buttonText: { fontSize: 13, fontWeight: "bold" },
});

const stylesBottom = StyleSheet.create({
  gridContainer: {
    flex: 6,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    margin: 20,
    marginBottom: 50,
    height: calculateHeightOfCircle(40),
    width: Dimensions.get("window").width / 2 - 40,
  },
  image: { width: "100%", height: "100%", alignSelf: "center" },
  textContainer: { alignSelf: "center", marginTop: 10 },
  buttonText: { textTransform: "uppercase", fontSize: 13, fontWeight: "bold" },
});

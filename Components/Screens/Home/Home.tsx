import * as React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
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
import Service from "./Service/Service";

const Images = [
  {
    name: "NAV",
    uri:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
  },
  {
    name: "Vigo",
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

const PopularServices = [
  {
    name: "Søknadsfrister",
    uri:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
  },
  {
    name: "Hvordan sjekke skatt",
    uri:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
  },
  {
    name: "Bytte bolig",
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

const VIGO2 = [
  {
    name: "Vigo",
    info:
      "Vigo er en internettportal for søking til videregående opplæring i skole og bedrift, fagskoleutdanning og videregående opplæring for voksne og realkompetansevurdering. Vigo er eid av Vigo IKS som er et interkommunalt selskap, og er et samarbeid mellom alle fylkene i Norge i tillegg til Oslo kommune.",
    function: [
      {
        title: "karakterer",
        icon: {
          type: "Fontisto",
          name: "bar-chart",
        },
        content: {
          description: "description",
        },
      },
      {
        title: "Fravær",
        icon: {
          type: "FontAwesome",
          name: "calendar",
        },
        content: {
          description: "test",
        },
      },
      {
        title: "Søk skole",
        icon: {
          type: "MaterialIcons",
          name: "school",
        },
        content: {
          description: "description",
        },
      },
    ],
  },
  
];

const services = [
    {
        name: "Vegvesenet",
        logo: "https://www.vegvesen.no/_public/vegvesen.no/images/css-bibliotek/svg/svv-logo-graa-topp.svg?_ts=16d39861aa8",
        function: [
            {
                title: "Veien til førerkortet"
            },
            {
                title: "Teoriprøve"
            },
            {
                title: "Oppkjøring"
            }
        ]
  
    },
    {
        name: "Vigo",
        logo: "https://www.vigo.no/vigo/html/img/vigo-logo.png"

    },
    {
        name: "Lånekassen",
        logo: "https://pbs.twimg.com/profile_images/1237666131407785984/rVBZZwGk_400x400.jpg"
    },
    {
        name: "Skatteetaten",
        logo: "https://www.seniornett.no/wp-content/uploads/2020/02/logo-skatteetaten-281x300.png"
    }
]

//TODO: remove, temporary for design
function calculateHeightOfCircle(offset: number) {
  return Dimensions.get("window").width / 2 - offset;
}

const Stack = createStackNavigator();

function AllServices({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={stylesTop.container}
          data={PopularServices}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              //Debug onPress={() => console.log("index clicked", index)}
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
                <Text style={stylesTop.text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <View style={stylesBottom.container}>
          {services.map((service, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Service", {
                  itemId: index,
                  name: service.name,
                  functions: service.function,
                })
              }
              key={index}
              style={stylesBottom.item}
            >
              <Image
                source={{ uri: service.logo }}
                resizeMethod={"resize"}
                style={stylesBottom.image}
              />
              <View style={stylesBottom.textContainer}>
                <Text style={stylesBottom.text}>{service.name}</Text>
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
      <Stack.Screen name={"Service"} component={Service} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

const stylesTop = StyleSheet.create({
  container: {
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
  text: { fontSize: 13, fontWeight: "bold" },
});

const stylesBottom = StyleSheet.create({
  container: {
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
  image: { width: "100%", height: "100%", alignSelf: "center", backgroundColor: 'red' },
  textContainer: { alignSelf: "center", marginTop: 10, backgroundColor: 'green' },
  text: { textTransform: "uppercase", fontSize: 13, fontWeight: "bold" },
});

import * as React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
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
import { useEffect, useState } from "react";

import { Lanekassen } from "./Service/Lånekassen/Lånekassen";
import { retrieveData, storeData } from "../../Storage";
import { Politi } from "./Service/Politi/Politi";
import { Helsenorge } from "./Service/Helsenorge/Helsenorge";
import { useClock, useSpringTransition, useValue } from "react-native-redash";
import Animated, {
  block,
  Clock,
  Easing,
  interpolate,
  multiply,
  set,
  startClock,
  useCode,
  timing,
  Value,
  Extrapolate,
} from "react-native-reanimated";
import Digipost from "../Home/Service/Digipost/Digipost";
import Mail from "../Home/Service/Digipost/Mail";
import * as Notifications from "expo-notifications";

const PopularServices = [
  {
    service: "Vigo",
    name: "Karakterer",
    uri: require("../assets/vigo.png"),
  },
  {
    service: "Skatteetaten",
    name: "Søk frikort",
    uri: require("../assets/skatteetaten.jpg"),
  },
  {
    service: "Helsenorge",
    name: "Bestill time",
    uri: require("../assets/helsenorge.png"),
  },
  {
    service: "Vegvesenet",
    name: "Oppkjøring",
    uri: require("../assets/vegvesenet.png"),
  },
  {
    service: "Politi",
    name: "Søk om politiattest",
    uri: require("../assets/politiet.png"),
  },
  {
    service: "Lånekassen",
    name: "Søknad om lån og stipend",
    uri: require("../assets/lånekassenlogo.png"),
  },
];

const services = [
  {
    name: "Vigo",
    uri: require("../assets/vigo.png"),
  },
  {
    name: "Vegvesenet",
    uri: require("../assets/vegvesenet.png"),
  },
  {
    name: "Skatteetaten",
    uri: require("../assets/skatteetaten.jpg"),
  },
  {
    name: "Lånekassen",
    uri: require("../assets/lånekassenlogo.png"),
  },
  {
    name: "Politi",
    uri: require("../assets/politiet.png"),
  },
  {
    name: "Helsenorge",
    uri: require("../assets/helsenorge.png"),
  },
];

const { width } = Dimensions.get("window");

//TODO: remove, temporary for design
function calculateHeightOfCircle(offset: number) {
  return Dimensions.get("window").width / 2 - offset;
}

const Stack = createStackNavigator();

//TODO: REMOVE - exist because of andorid eumlator problems
const checkLocalStorage = async () => {
  const pid = await retrieveData("pid");
  if (pid === null) {
    await storeData("pid", "23079418366");
  }
};

function AllServices({ navigation }) {
  const [notifications, setNotifications] = useState("");

  let handleNotifications = (notification) => {
    setNotifications(notification);
  };

  let handleNotificationResponse = (response) => {
    console.log(response);
    navigation.navigate("Notification");
  };

  useEffect(() => {
    Notifications.addNotificationReceivedListener(handleNotifications);
    Notifications.addNotificationResponseReceivedListener(
      handleNotificationResponse
    );
  }, [notifications]);

  useEffect(() => {
    checkLocalStorage().catch((err) => console.log(err));
  });

  const runTiming = (clock: Clock) => {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      frameTime: new Value(0),
      time: new Value(0),
    };
    const config = {
      toValue: new Value(1),
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    };
    return block([timing(clock, state, config), state.position]);
  };

  const clock = useClock();
  const progress = useValue(0);
  useCode(() => [startClock(clock), set(progress, runTiming(clock))], []);

  const delta = 1 / services.length;

  const executeTransition = (index: number, start: number, end: number) => {
    return interpolate(progress, {
      inputRange: [start, end],
      outputRange: [0, 1],
      extrapolate: Extrapolate.CLAMP,
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: "#F2F2F2" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Text
            style={{
              fontWeight: "bold",
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 10,
              fontSize: 18,
            }}
          >
            Snarveier
          </Text>
          <FlatList
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            style={stylesTop.gridContainer}
            data={PopularServices}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate(item.service, { open: item.name })
                }
                style={stylesTop.item}
              >
                <View style={stylesTop.imageContainer}>
                  <Image
                    source={item.uri}
                    style={[
                      {
                        width: "80%",
                        height: "80%",
                        alignSelf: "center",
                        justifyContent: "center",
                        borderRadius: 10,
                      },
                    ]}
                    resizeMode={"contain"}
                  />
                </View>
                <View style={stylesTop.textContainer}>
                  <Text style={stylesTop.buttonText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 30,
            fontSize: 18,
          }}
        >
          Offentlige tjenester
        </Text>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={stylesBottom.gridContainer}>
            {services.map((service, index) => (
              <Animated.View
                key={index}
                style={{
                  transform: [
                    {
                      scale: executeTransition(
                        index,
                        index * delta,
                        index * delta + delta
                      ),
                    },
                  ],
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(service.name, { open: null })
                  }
                  key={index}
                  style={[
                    stylesBottom.item,
                    {
                      backgroundColor: "white",
                      borderRadius: 25,
                      justifyContent: "center",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.1,
                      shadowRadius: 1.8,

                      elevation: 4,
                    },
                  ]}
                >
                  <Image
                    source={service.uri}
                    style={[
                      {
                        width: "55%",
                        height: "55%",
                        alignSelf: "center",
                        borderRadius: 20,
                      },
                    ]}
                    resizeMode={"contain"}
                  />
                  <View style={stylesBottom.textContainer}>
                    <Text style={stylesBottom.buttonText}>{service.name}</Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("Digipost")}
          >
            <Animated.View
              style={{
                flex: 1,
                backgroundColor: "white",
                height: 150,
                width: width,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.1,
                shadowRadius: 1.8,

                elevation: 4,
                transform: [
                  {
                    scale: executeTransition(
                      1,
                      delta,
                      services.length * delta + delta
                    ),
                  },
                ],
              }}
            >
              <Image
                source={require("./assets/digipost.png")}
                style={[
                  {
                    width: "70%",
                    height: "70%",
                    alignSelf: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  },
                ]}
                resizeMode={"contain"}
              />
              <Text style={{}}>(1 ny epost)</Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Offentlige tjenester"}
        component={AllServices}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Vigo"}
        component={Vigo}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={"Skatteetaten"}
        component={Skatteetaten}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={"Vegvesenet"}
        component={Vegvesenet}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={"Lånekassen"}
        component={Lanekassen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={"Politi"}
        component={Politi}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={"Helsenorge"}
        component={Helsenorge}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={"Digipost"}
        component={Digipost}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={"Mail"}
        component={Mail}
        options={{ headerShown: true }}
      />
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
    borderColor: "#C0C0C0",
    backgroundColor: "white",
  },
  item: {
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 20,
    alignItems: "center",
  },
  imageContainer: {
    height: 50,
    width: 50,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    borderRadius: 10,
  },
  image: { width: "100%", height: "100%", borderRadius: 10 },
  textContainer: { alignSelf: "center", marginTop: 10 },
  buttonText: { fontSize: 13, fontWeight: "bold" },
});

const stylesBottom = StyleSheet.create({
  gridContainer: {
    flex: 6,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  item: {
    margin: 10,
    marginBottom: 10,
    height: calculateHeightOfCircle(40),
    width: Dimensions.get("window").width / 2 - 40,
  },
  image: {
    width: "50%",
    height: "50%",
    alignSelf: "center",
    borderRadius: 25,
  },
  textContainer: { alignSelf: "center", marginTop: 10 },
  buttonText: { textTransform: "uppercase", fontSize: 13, fontWeight: "bold" },
});

const styleInfo = StyleSheet.create({
  gridContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

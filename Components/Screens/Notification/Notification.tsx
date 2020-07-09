import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import TeoriProve from "../Vegvesenet/TeoriProve"
import Frikort from "../Home/Service/Skatteetaten/Frikort";
import SkatteMelding from "../Home/Service/Skatteetaten/SkatteMelding";


// data -> Skal byttes ut med data fra database
var deadline = new Date();
var deadline2 = new Date();
var deadline3 = new Date();
deadline2.setDate(deadline2.getDate() + 10);
deadline.setDate(deadline.getDate() + 1);
deadline3.setDate(deadline3.getDate() + 15);

const events = [
  {
    name: "Søk høyere utdanning",
    logo: "https://www.vigo.no/vigo/html/img/vigo-logo.png",
    description: "Fristen for å søke vidergåående skole er 25.05.2020",
    date: deadline,
  },
  {
    name: "Søk om støtte fra lånekassen",
    logo:
      "https://pbs.twimg.com/profile_images/1237666131407785984/rVBZZwGk_400x400.jpg",
    date: deadline2,
    description: "Fristen for å søke støtte fra lånekassen er 25.03.2020",
  },
  {
    name: "Corona vaksine",
    logo:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
    description:
      "Helsenorge ber alle holde seg hjemme da smitten har bredt seg til din by. For mer informasjon sjekk ut våre sider.",
    date: deadline3,
  },
];
// Slutt data

export default function Notification() {
  return (
    <View>
      <Header
        backgroundColor="white"
        centerComponent={{
          buttonText: "Varslinger",
          style: { fontWeight: "bold", backgroundColor: "white", fontSize: 16 },
        }}
      />
      <ScrollView>
        {events.map((event, index) => (
          <NotificationBar
            key={index}
            logo={{
              uri: event.logo,
            }}
            description={event.description}
          />
        ))}
          <SkatteMelding/>
      </ScrollView>
    </View>
  );
}

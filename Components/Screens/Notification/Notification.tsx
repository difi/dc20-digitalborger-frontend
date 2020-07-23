import * as React from "react";
import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import NotificationBar from "./NotificationBar";
import { Header, Text } from "react-native-elements";
import { useEffect, useState } from "react";
import axios from "axios";

import Skattemelding from "../Skattegiver";
import KontaktPoliti from "../Home/Service/Politi/KontaktPoliti";

// data -> Skal byttes ut med data fra database
var deadline = new Date();
var deadline2 = new Date();
var deadline3 = new Date();
deadline2.setDate(deadline2.getDate() + 10);
deadline.setDate(deadline.getDate() + 1);
deadline3.setDate(deadline3.getDate() + 15);

const events = [
  {
    service: "Vigo",
    description: "Fristen for å søke videregående skole er 25.05.2020",
    received: "25 minutter siden",
    icon: "mail-with-circle",
    icon_color: "#30D158",
  },
  {
    service: "Lånekassen",
    description:
      "Lånekassen minner om at fristen for å søke støtte er 25.03.2020",
    received: "Mandag, 17:35",
    icon: "mail-with-circle",
    icon_color: "#64D2FF",
  },
  {
    service: "Helse Norge",
    description:
      "Helsenorge ber alle holde seg hjemme da smitten har bredt seg til din by. For mer informasjon sjekk ut våre nettsider.",
    received: "Mars, 18 2020",
    icon: "info-with-circle",
    icon_color: "#BF5AF2",
  },
];
// Slutt data

export default function Notification() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Varslinger</Text>
      <ScrollView>
        {events.map((event, index) => (
          <NotificationBar
            key={index}
            logo={{
              uri: event.logo,
            }}
            description={event.description}
            service={event.service}
            received={event.received}
            icon={event.icon}
            icon_color={event.icon_color}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height: "100%",
    width: "100%",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    marginTop: 10,
    padding: 20,
  },
});

/*<Header
        title="Varslinger"
        backgroundColor="white"
        centerComponent={{
          text: "Varslinger",
          boldText: "Varslinger",
          style: { fontWeight: "bold", backgroundColor: "white", fontSize: 16 },
        }}
      />*/

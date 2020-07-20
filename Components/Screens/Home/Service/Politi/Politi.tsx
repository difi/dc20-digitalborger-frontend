import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import HeaderPoliti from "./HeaderPoliti";
import { Component, useEffect, useState } from "react";
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import AntDesign from "react-native-vector-icons/AntDesign";
// @ts-ignore
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Accordion from "react-native-collapsible/Accordion";
import {
  bInterpolatePath,
  mix,
  useTimingTransition,
  useTransition,
} from "react-native-redash";
import Animated, { interpolate } from "react-native-reanimated";
import { ListItem } from "../Collapsible/ListItem";
import Header from "./HeaderPoliti";
import Footer from "../Footer";
import PolitiAttest from "./PolitiAttest";
import Anmelde from "./Anmelde";
import KontaktPoliti from "./KontaktPoliti";

const POLITI = [
  {
    title: "Søk om politiattest",
    icon: {
      type: "AntDesign",
      name: "form",
    },
    content: {
      description: "description",
    },
  },
  {
    title: "Forny eller søk om pass",
    icon: {
      type: "FontAwesome",
      name: "camera",
    },
    content: {
      description: "test",
    },
  },
  {
    title: "Anmelde",
    icon: {
      type: "FontAwesome5",
      name: "user-edit",
    },
    content: {
      description: "description",
    },
  },
  {
    title: "Kontakt politiet",
    icon: {
      type: "FontAwesome5",
      name: "phone",
    },
    content: {
      description: "description",
    },
  },
];

const SPACE = 20;

export function Politi() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#212a3b" }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderPoliti
          logo={"Components/Screens/Home/Service/Politi/Politi.tsx"}
        />
        <View>
          <ListItem
            key={0}
            iconName={POLITI[0].icon.name}
            iconType={POLITI[0].icon.type}
            containerHeight={250}
            title={POLITI[0].title}
            parentCallback={(item) => {
              setSelectedIndex(0);
              console.log("toggled", item);
            }}
            pressed={selectedIndex === 0 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <PolitiAttest></PolitiAttest>
            </View>
          </ListItem>

          <ListItem
            key={1}
            iconName={POLITI[1].icon.name}
            iconType={POLITI[1].icon.type}
            containerHeight={400}
            title={POLITI[1].title}
            parentCallback={(item) => {
              setSelectedIndex(1);
              console.log("toggled", item);
            }}
            pressed={selectedIndex === 1 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <View style={{ flex: 1 }}>
                <Text>pass</Text>
              </View>
            </View>
          </ListItem>
          <ListItem
            key={2}
            iconName={POLITI[2].icon.name}
            iconType={POLITI[2].icon.type}
            containerHeight={250}
            title={POLITI[2].title}
            parentCallback={(item) => {
              setSelectedIndex(2);
              console.log("toggled", item);
            }}
            pressed={selectedIndex === 2 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <View>
                <Anmelde></Anmelde>
              </View>
            </View>
          </ListItem>
          <ListItem
            key={3}
            iconName={POLITI[3].icon.name}
            iconType={POLITI[3].icon.type}
            containerHeight={220}
            title={POLITI[3].title}
            parentCallback={(item) => {
              setSelectedIndex(3);
              console.log("toggled", item);
            }}
            pressed={selectedIndex === 3 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <View>
                <KontaktPoliti></KontaktPoliti>
              </View>
            </View>
          </ListItem>
        </View>
        <Footer
          description={
            "Politiet kan gi råd og veiledning, ta imot anmeldelse og vurdere behov for beskyttelse. På politiet.no finner du tjenester, åpningstider, kontakt og informasjon. "
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

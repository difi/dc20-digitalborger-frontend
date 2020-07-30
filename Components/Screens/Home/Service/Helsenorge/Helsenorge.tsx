import * as React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";

import { SafeAreaView, ScrollView, Text, View } from "react-native";
//import Header from "../Header";
import Header from "./HeaderHelsenorge";
import { ListItem } from "../Collapsible/ListItem";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import Resepter from "./Resepter";
import TimeAvtaler from "./TimeAvtaler";
import Vaksine from "./Vaksine";
import Fastlege from "./Fastlege";

const HELSE = [
  {
    title: "Fastlege",
    icon: {
      type: "Fontisto",
      name: "doctor",
    },
  },
  {
    title: "Bestill time",
    icon: {
      type: "Entypo",
      name: "calendar",
    },
  },
  {
    title: "Vaksine",
    icon: {
      type: "FontAwesome5",
      name: "syringe",
    },
  },
  {
    title: "Resepter",
    icon: {
      type: "FontAwesome5",
      name: "prescription-bottle",
    },
  },
];

export function Helsenorge({ route }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { open } = route.params;
  useEffect(() => {
    if (open !== null) {
      switch (open) {
        case "Fastlege":
          setSelectedIndex(0);
          break;
        case "Bestill time":
          setSelectedIndex(1);
          break;
        case "Vaksine":
          setSelectedIndex(2);
          break;
        case "Resepter":
          setSelectedIndex(3);
          break;
      }
    }
  }, [open]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        logo={"Components/Screens/Home/Service/Helsenorge/Helsenorge.tsx"}
        nameOfService={"Helsenorge"}
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: "#9a1c6f" }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ListItem
            key={0}
            iconName={HELSE[0].icon.name}
            iconType={HELSE[0].icon.type}
            containerHeight={120}
            title={HELSE[0].title}
            parentCallback={(item) => {
              setSelectedIndex(0);
            }}
            pressed={selectedIndex === 0 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <Fastlege />
            </View>
          </ListItem>

          <ListItem
            key={1}
            iconName={HELSE[1].icon.name}
            iconType={HELSE[1].icon.type}
            containerHeight={140}
            title={HELSE[1].title}
            parentCallback={(item) => {
              setSelectedIndex(1);
            }}
            pressed={selectedIndex === 1 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <TimeAvtaler />
            </View>
          </ListItem>

          <ListItem
            key={2}
            iconName={HELSE[2].icon.name}
            iconType={HELSE[2].icon.type}
            containerHeight={340}
            title={HELSE[2].title}
            parentCallback={(item) => {
              setSelectedIndex(2);
            }}
            pressed={selectedIndex === 2 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <Vaksine />
            </View>
          </ListItem>
          <ListItem
            key={3}
            iconName={HELSE[3].icon.name}
            iconType={HELSE[3].icon.type}
            containerHeight={410}
            title={HELSE[3].title}
            parentCallback={(item) => {
              setSelectedIndex(3);
            }}
            pressed={selectedIndex === 3 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <Resepter />
            </View>
          </ListItem>
        </View>
        <Footer
          description={
            "Helsenorge har kvalitetssikret informasjon om helse, sykdom og rettigheter, og digitale tjenester som bytt fastlege, e-resepter og kjernejournal. Flere tjenester som hjelper deg å følge opp din egen helse finner du på helsenorge.no."
          }
          link={"https://helsenorge.no/"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

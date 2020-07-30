import * as React from "react";

import { SafeAreaView, ScrollView, Text, View } from "react-native";
//import Header from "../Header";
import Header from "./HeaderVegvesenet";
import { ListItem } from "../Collapsible/ListItem";
//import Grades from "../Vigo/Grades";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import VeienTilForerkortet from "./VeienTilForerkort";
import TeoriProve from "./TeoriProve";
import Oppkjoring from "./Oppkjoring";

const SKATT = [
  {
    title: "Veien til førerkortet",
    icon: {
      type: "FontAwesome",
      name: "motorcycle",
    },
    content: {
      description: "test1",
    },
  },
  {
    title: "Bestill time til teoriprøve",
    icon: {
      type: "FontAwesome",
      name: "star",
    },
    content: {
      description: "test2",
    },
  },
  {
    title: "Oppkjøring",
    icon: {
      type: "FontAwesome",
      name: "car",
    },
    content: {
      description: "test3",
    },
  },
];

export function Vegvesenet({ route }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { open } = route.params;
  useEffect(() => {
    if (open !== null) {
      switch (open) {
        case "Veien til førerkortet":
          setSelectedIndex(0);
          break;
        case "Bestill time til teoriprøve":
          setSelectedIndex(1);
          break;
        case "Oppkjøring":
          setSelectedIndex(2);
          break;
      }
    }
  }, [open]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        logo={"Components/Screens/Home/Service/Vegvesenet/Vegvesenet.tsx"}
        nameOfService={"Statens vegvesen"}
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: "#DA3737" }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ListItem
            key={0}
            iconName={SKATT[0].icon.name}
            iconType={SKATT[0].icon.type}
            containerHeight={600}
            title={SKATT[0].title}
            parentCallback={(item) => {
              setSelectedIndex(0);
            }}
            pressed={selectedIndex === 0 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <VeienTilForerkortet />
            </View>
          </ListItem>

          <ListItem
            key={1}
            iconName={SKATT[1].icon.name}
            iconType={SKATT[1].icon.type}
            containerHeight={130}
            title={SKATT[1].title}
            parentCallback={(item) => {
              setSelectedIndex(1);
            }}
            pressed={selectedIndex === 1 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <TeoriProve />
            </View>
          </ListItem>

          <ListItem
            key={2}
            iconName={SKATT[2].icon.name}
            iconType={SKATT[2].icon.type}
            containerHeight={140}
            title={SKATT[2].title}
            parentCallback={(item) => {
              setSelectedIndex(2);
            }}
            pressed={selectedIndex === 2 ? true : false}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <Oppkjoring />
            </View>
          </ListItem>
        </View>
        <Footer
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          link={"https://www.vegvesen.no/"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

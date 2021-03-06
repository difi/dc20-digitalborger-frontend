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
import { Component, useEffect, useState } from "react";
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
// @ts-ignore
import Fontisto from "react-native-vector-icons/Fontisto";

// @ts-ignore
import Octicons from "react-native-vector-icons/Octicons";

import Accordion from "react-native-collapsible/Accordion";
import {
  bInterpolatePath,
  mix,
  useTimingTransition,
  useTransition,
} from "react-native-redash";
import Animated, { interpolate } from "react-native-reanimated";
import VeienTilForerkort from "../Vegvesenet/VeienTilForerkort";
import { ListItem } from "../Collapsible/ListItem";
import Footer from "../Footer";
import Absence from "./Absence";
import Grades from "./Grades";
import School from "./School";
import Header from "../Header";

const VIGO = [
  {
    title: "Karakterer",
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
    title: "Skoler i nærheten",
    icon: {
      type: "MaterialIcons",
      name: "school",
    },
    content: {
      description: "description",
    },
  },
];

export function Vigo({ route }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { open } = route.params;
  useEffect(() => {
    if (open !== null) {
      switch (open) {
        case "Karakterer":
          setSelectedIndex(0);
          break;
        case "Fravær":
          setSelectedIndex(1);
          break;
        case "Søk Skole":
          setSelectedIndex(2);
          break;
      }
    }
  }, [open]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#5da423" }}
        showsVerticalScrollIndicator={false}
      >
        <Header logo={require("./assets/vigo.png")} />
        <View>
          <ListItem
            key={0}
            iconName={VIGO[0].icon.name}
            iconType={VIGO[0].icon.type}
            containerHeight={250}
            title={VIGO[0].title}
            parentCallback={() => {
              setSelectedIndex(0);
            }}
            pressed={selectedIndex === 0}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <Grades />
            </View>
          </ListItem>

          <ListItem
            key={1}
            iconName={VIGO[1].icon.name}
            iconType={VIGO[1].icon.type}
            containerHeight={210}
            title={VIGO[1].title}
            parentCallback={() => {
              setSelectedIndex(1);
            }}
            pressed={selectedIndex === 1}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <View style={{ flex: 1 }}>
                <Absence />
              </View>
            </View>
          </ListItem>
          <ListItem
            key={2}
            iconName={VIGO[2].icon.name}
            iconType={VIGO[2].icon.type}
            containerHeight={420}
            title={VIGO[2].title}
            parentCallback={() => {
              setSelectedIndex(2);
            }}
            pressed={selectedIndex === 2}
          >
            <View style={{ padding: 10, flex: 1 }}>
              <View style={styles.titles}>
                <Text style={styles.skolenavn}>Skolenavn</Text>
                <Text style={styles.distanse}>Distanse</Text>
                <Text style={styles.nettside}>Nettside</Text>
              </View>
              <School />
            </View>
          </ListItem>
        </View>
        <Footer
          description={
            "Vigo er en internettportal for søking til videregående opplæring i skole og bedrift, fagskoleutdanning og videregående opplæring for voksne og realkompetansevurdering."
          }
          link={"https://www.vigo.no/vigo/servlet/vigo"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titles: {
    flexDirection: "row",
    marginTop: 5,
  },
  skolenavn: {
    fontWeight: "bold",
    marginLeft: 5,
  },
  distanse: {
    fontWeight: "bold",
    marginLeft: 130,
  },
  nettside: {
    fontWeight: "bold",
    position: "absolute",
    right: 0,
  },
});

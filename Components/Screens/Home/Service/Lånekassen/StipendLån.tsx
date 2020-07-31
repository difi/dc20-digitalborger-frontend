import * as React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";
import LånekasseButton from "../assets/LånekasseButton";

export default function StipendLån() {
  return (

    <View style={styles.container}>
      <View style={styles.linkContainer}>
        <LånekasseButton label={"Videregående opplæring "} color={"white"} onPress={() =>
            WebBrowser.openBrowserAsync(
                "https://dinesider.lanekassen.no/Nettsoknad/Default.aspx?soknadstype=ST01D2&UndervisningsAr=Innevarende"
            )} textColor={"black"}/>
      </View>
      <View style={styles.linkContainer}>
        <LånekasseButton label={"Grunnskole opplæring"} color={"white"} onPress={() =>
            WebBrowser.openBrowserAsync(
                "https://lanekassen.no/nb-NO/Stipend-og-lan/soknader/soknad-om-stotte-til-utdanning-i-norge1/grunnskoleopplaring/"
            )} textColor={"black"}/>
      </View>
      <View style={styles.linkContainer}>
        <LånekasseButton label={"Høyere utdanning"} color={"white"} onPress={() =>
            WebBrowser.openBrowserAsync(
                "https://dinesider.lanekassen.no/Nettsoknad/Default.aspx?soknadstype=ST01D3&UndervisningsAr=Innevarende"
            )} textColor={"black"}/>
      </View>

      <View style={styles.linkContainer}>
        <LånekasseButton label={"Lærling"} color={"white"} onPress={() =>
            WebBrowser.openBrowserAsync(
                "https://www.lanekassen.no/nn-NO/stipend-og-lan/soknader/soknad-om-stotte-til-utdanning-i-noreg1/larling-/"
            )} textColor={"black"}/>
      </View>
      <View style={styles.linkContainer}>
        <LånekasseButton label={"Sommerkurs"} color={"white"} onPress={() =>
            WebBrowser.openBrowserAsync(
                "https://dinesider.lanekassen.no/Nettsoknad/Default.aspx?soknadstype=ST01D3&UndervisningsAr=Forrige"
            )} textColor={"black"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%",
    left: 17,
  },
  linkContainer: {
    width: "49%",
    height: "25%",
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignSelf: "flex-end",
    right: 8,
  },
  textContainer: {
    left: 10,
    bottom: 20,
  },
});

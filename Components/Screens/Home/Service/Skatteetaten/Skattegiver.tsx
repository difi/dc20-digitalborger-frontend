import * as React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
// @ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { retrieveData } from "../../../../Storage";
import { getSkattInfo } from "../../../../ServerCommunications/Services/SkatteetatenService";
import Button from "../assets/Button";

const info = {
  intro: "Disse har hentet skattekortet ditt:",
  fetched: "Hentet:",
};

export default function Skattegiver() {
  const [employerData, setEmployer] = useState({
    Skatt: { inntekt: 0, beregnet: 0, trekk: 0 },
    Arbeidsgiver: [{ company: "", date: "" }],
  });

  useEffect(() => {
    (async () => {
      const pid: number = await retrieveData("pid");
      let result = await getSkattInfo(pid);
      setEmployer(result);
    })();
  }, []);

  const formatDate = (date) => {
    let time = String(date).split("-");
    let year = time[0];
    let month = time[1];
    let day = time[2];

    return day + "." + month + "." + year;
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.introText}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              textDecorationLine: "underline",
            }}
          >
            {info.intro}
          </Text>
        </View>

        {employerData.Arbeidsgiver.map((item, indexSkatt) => (
          <View key={indexSkatt} style={styles.textContainer}>
            <View style={styles.leftText}>
              <Text style={{ fontSize: 15 }}>{item.company}</Text>
            </View>
            <View style={styles.rightText}>
              <Text style={{ fontSize: 15 }}>{info.fetched}</Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {formatDate(item.date)}
              </Text>
            </View>
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <Button
            label={"Flere detaljer"}
            color={"#6f2c3f"}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://skatt.skatteetaten.no/web/minskatteside/?innvalg=minearbeidsgivere#/minearbeidsgivere"
              )
            }
            textColor={"white"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: "2%",
  },
  introText: {
    marginBottom: "2%",
  },
  textContainer: {
    flexDirection: "row",
    marginTop: "1%",
    borderBottomColor: "#E1E1E1",
    borderBottomWidth: 1,
  },
  rightText: {
    alignSelf: "flex-end",
    left: 95,
    marginBottom: "2%",
    flex: 1 / 2,
  },
  leftText: {
    alignItems: "flex-start",
    flexDirection: "column",
    marginBottom: "2%",
    flex: 1 / 2,
  },
  buttonContainer: {
    margin: "10%",
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "6%",
  },
});

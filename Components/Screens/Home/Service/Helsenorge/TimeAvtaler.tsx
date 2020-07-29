import * as React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

// @ts-ignore
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useEffect, useState } from "react";
import { retrieveData } from "../../../../Storage";
import {
  getAppointmentData,
  getDoctorData,
} from "../../../../ServerCommunications/Services/HelseNorgeService";

const Avtaler = [
  {
    type: "Undersøkelse",
    place: "Haukeland Sykehus",
    clinic: "Poliklinikken",
    doctor: "Nils Nilsen",
    date: "2020-07-24",
    time: "11:20",
  },
  {
    type: "Blodprøve",
    place: "Oasen Legesenter",
    clinic: "Inngang A ",
    doctor: "Kari Hansen",
    date: "2020-07-26",
    time: "09:00",
  },
  {
    type: "CT undersøkelse",
    place: "Rikshospitalet",
    clinic: "Røntgenavdeling",
    doctor: "Jens Kversøy",
    date: "2020-08-03",
    time: "14:15",
  },
];

const legeKontor = {
  number: "55 17 50 90",
};

export default function TimeAvtaler() {
  const [officeNumber, setOfficeNumber] = useState({
    name: "",
    office: "",
    phone: "",
  });

  useEffect(() => {
    (async () => {
      const pid: number = await retrieveData("pid");
      let result = await getDoctorData(pid);
      setOfficeNumber(result);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topContainerText}>
          <Text style={styles.text}>Ring ditt legekontor: </Text>
          <Text
            onPress={() => {
              Linking.openURL("tel: " + officeNumber.phone);
            }}
            style={{ fontSize: 17, fontWeight: "bold" }}
          >
            {officeNumber.phone}
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://helsenorge.no/kontakt-fastlegen/kom-i-kontakt"
            )
          }
        >
          <Text style={styles.text}>Bestill time hos fastlege på nett</Text>
          <FontAwesome5 name={"arrow-right"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 17,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 260,
  },
  topContainerText: {
    flexDirection: "row",
    bottom: 7,
    left: 10,
  },
  topContainer: {
    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
    borderRadius: 20,
  },
  bottomContainer: {
    marginTop: 10,
    left: 10,
    flexDirection: "row",
  },
});

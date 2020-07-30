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
import Button from "../assets/Button";
import {
  getAppointmentData,
  getDoctorData,
} from "../../../../ServerCommunications/Services/HelseNorgeService";


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
        <View style={styles.buttonContainer}>
          <Button label={"Bestill time hos fastlege på nett"} color={"#9a1c6f"} onPress={() =>
              WebBrowser.openBrowserAsync(
                  "https://helsenorge.no/kontakt-fastlegen/kom-i-kontakt"
              )} textColor={"white"}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    fontSize: 17,
    marginLeft: 20,
  },
  topContainerText: {
    flexDirection: "row",
  },
  topContainer: {
    marginTop: 25,
  },
  buttonContainer: {
    margin: "10%",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 25,
  },
});

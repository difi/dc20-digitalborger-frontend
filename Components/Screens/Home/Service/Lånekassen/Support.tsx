import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Location from "expo-location";
import { fetchUserInfoAsync } from "expo-auth-session";
import { getSupport } from "../../../../ServerCommunications/Services/LaanekassenService";
import { retrieveData } from "../../../../Storage";


const getScholarship = async () => {
  const pid: any = await retrieveData("pid").catch((err) => console.log(err));
  const data = await getSupport(pid);
  return data;
};

export default function Support() {
  const [scholarship, setScholarship] = useState([{ scholarship: "", sum: 0 }]);

  useEffect(() => {
    getScholarship()
      .then((data) => setScholarship(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.textInfo}>
          Gjennomsnittstøtte i vanlig videregående opplæring:{" "}
        </Text>
      </View>

      {scholarship.map((item, index) => (
        <View
          key={index}
          style={
            index == scholarship.length - 1
              ? styles.LastElement
              : styles.listElements
          }
        >
          <Text style={styles.text}>{item.scholarship}</Text>
          <Text
            style={{
              fontWeight: index == scholarship.length - 1 ? "bold" : "normal",
              fontSize: 16,
              textDecorationLine:
                index == scholarship.length - 1 ? "underline" : "none",
            }}
          >
            {item.sum + " kr"}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  textInfo: {
    fontSize: 15,
    fontStyle: "italic",
    color: "white",
  },
  text: {
    fontSize: 16,
    padding: "5%",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#97469d",
    height: 40,
  },
  listElements: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    flexShrink: 1,
  },
  LastElement: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 1,
  },
});

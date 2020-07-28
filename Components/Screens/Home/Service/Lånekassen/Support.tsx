import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Location from "expo-location";
import { fetchUserInfoAsync } from "expo-auth-session";
import { getSupport } from "../../../../ServerCommunications/Services/LaanekassenService";
import { retrieveData } from "../../../../Storage";

const SupportForStudent = [
  {
    title: "Utstyrsstipend",
    sum: "1 660.00",
  },
  {
    title: "Borteboerstipend",
    sum: "43 753.00",
  },
  {
    title: "Stipend",
    sum: "13 626.00",
  },
  {
    title: "Lån",
    sum: 0,
  },
  {
    title: "Neste Utbetaling",
    sum: "346 862.21",
  },
];


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
      <Text style={styles.textInfo}>
        Gjennomsnittstøtte i vanlig videregående opplæring:{" "}
      </Text>

      {scholarship.map((item, index) => (
        <View
          key={index}
          style={
            index == SupportForStudent.length - 1
              ? styles.LastElement
              : styles.listContainer
          }
        >
          {console.log(index)}
          <Text style={styles.listText}>{item.scholarship}</Text>
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
  },
  listContainer: {
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
  listText: {
    fontSize: 16,
    padding: "5%",
  },
});

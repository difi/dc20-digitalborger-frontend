import * as React from "react";
import Icon from "react-native-vector-icons/AntDesign";

import { StyleSheet, Text, View } from "react-native";

const persons = {
  name: "Linda Hansen",
  birth: " 01.01.2002",
  address: "Dalen 24",
  streetAddress: " 6863, Leikanger",
  email: "Linda.Hansen@gmail.com",
  number: " 12345678",
};

export default function UserInfo() {
  return (
    <View>
      <View style={styles.row}>
        <Icon name="user" size="40"></Icon>
        <View style={styles.textContainer}>
          <Text style={styles.upperText}>{persons.name}</Text>
          <Text>{persons.birth}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="home" size="40"></Icon>
        <View style={styles.textContainer}>
          <Text style={styles.upperText}>{persons.address}</Text>
          <Text>{persons.streetAddress}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="phone" size="40"></Icon>
        <View style={styles.textContainer}>
          <Text style={styles.upperText}>{persons.email}</Text>
          <Text>{persons.number}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    left: 10,
    marginTop: 15,
    marginBottom: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  upperText: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 3,
  },
});

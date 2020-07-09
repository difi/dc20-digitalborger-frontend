import * as React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, Text, View } from "react-native";
const persons = {
  name: "Linda Hansen",
  birth: " 01.01.2002",
  address: "Dalen 24",
  streetAddress: " 6863, Leikanger",
  email: "Linda.Hansen@gmail.com",
  number: " 71318795",
};
export default function UserInfo() {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="user" size={40}></Icon>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.upperText}>{persons.name}</Text>
          <Text>{persons.birth}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="home" size={40}></Icon>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.upperText}>{persons.address}</Text>
          <Text>{persons.streetAddress}</Text>
        </View>
      </View>
      <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Icon name="phone" size={40}></Icon>
      </View>
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
    marginBottom: 10,
    left: 20,
  },
  iconContainer:{
    left: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    top: 30,
    borderBottomColor: "#E1E1E1",
    borderBottomWidth: 1,
    borderRadius: 15,
  },
  upperText: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 3,
  },
});

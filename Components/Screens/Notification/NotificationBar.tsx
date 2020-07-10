import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Notification(props: {
  description: string;
  logo: string;
}) {
  return (
    <View style={styles.gridContainer}>
      <Image source={props.logo} style={styles.logo}></Image>
      <View style={styles.bar}></View>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
  bar: {
    backgroundColor: "black",
    height: "70%",
    width: "0.4%",
    marginRight: 10,
  },
  description: {
    width: "80%",
  },
});

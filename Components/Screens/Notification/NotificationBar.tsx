import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default function Notification(props: {
  description: string;
  logo: string;
  icon: string;
  received: string;
  icon_color: string;
  service: string;
}) {
  return (
    <View style={styles.gridContainer}>
      <Icon
        style={styles.logo}
        name={props.icon}
        size={55}
        color={props.icon_color}
      />
      <View>
        <Text style={styles.title}>{props.service}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.received}>{props.received}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    width: "98%",
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "white",
    shadowColor: "gainsboro",
    borderRadius: 20,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.8,
    elevation: 4,
    alignSelf: "center",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: -10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  description: {
    width: "80%",
    fontSize: 15,
    maxWidth: "100%",
  },
  received: {
    color: "grey",
    paddingVertical: 5,
  },
});

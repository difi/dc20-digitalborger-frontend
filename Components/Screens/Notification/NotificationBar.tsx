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
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    /*borderBottomColor: "#D1D1D6",
    borderBottomWidth: 1,
    borderBottomStartRadius: 25,
    borderBottomRightRadius: 25,*/
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
    fontFamily: "Helvetica",
    fontSize: 17,
  },
  description: {
    width: "80%",
    fontFamily: "Helvetica",
    fontSize: 16,
    maxWidth: "100%",
  },
  received: {
    fontFamily: "Helvetica",
    color: "grey",
    paddingVertical: 5,
  },
});

/**/

import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { floor } from "react-native-reanimated";

function getTimeFormat(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();
  const difference = (today.getTime() - date.getTime()) / 1000;

  if (difference < 3600 && difference > 120) {
    return Math.floor(difference / 60) + " minutter siden";
  } else if (difference > 7200 && difference < 86400) {
    return Math.floor(difference / 60 / 60) + " timer siden";
  } else if (difference > 3600 && difference < 7200) {
    return "1 time siden";
  } else if (difference < 60) {
    return "Nå";
  } else if (difference > 60 && difference < 120) {
    return "1 minutt siden";
  } else {
    return date.toLocaleDateString("en-GB");
  }
}

export default function Notification(props: {
  description: string;
  logo: string;
  icon: string;
  received: string;
  icon_color: string;
  service: string;
  index: number;
}) {
  function getColor(index: number) {
    const colors = ["#AED5F1", "#F7D590", "#EE8970"];
    return colors[index % 3];
  }

  return (
    <View style={styles.gridContainer}>
      <Icon
        style={styles.logo}
        name={"info-with-circle"}
        size={55}
        color={getColor(props.index)}
      />
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.title}>{props.service}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.received}>{getTimeFormat(props.received)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    width: "95%",
    height: "auto",
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
    fontSize: 15,
    maxWidth: "89%",
  },
  received: {
    color: "grey",
    marginTop: 5,
  },
});

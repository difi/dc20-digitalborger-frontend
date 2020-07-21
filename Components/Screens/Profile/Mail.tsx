import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { ScrollView } from "react-native-gesture-handler";

export default function Mail({ route }) {
  const { sender } = route.params;
  const { subject } = route.params;
  const { date } = route.params;
  const { content } = route.params;

  return (
    <ScrollView>
      <View style={singleMailStyles.headerInfo}>
        <View style={singleMailStyles.icon}>
          <Octicons name="mail-read" size={30}></Octicons>
        </View>
        <Text style={singleMailStyles.sender}>{sender}</Text>
        <Text style={singleMailStyles.date}>{date}</Text>
      </View>
      <View style={singleMailStyles.content}>
        <Text style={singleMailStyles.subject}>{subject}</Text>
        <Text style={singleMailStyles.content}>{content}</Text>
      </View>
    </ScrollView>
  );
}

const singleMailStyles = StyleSheet.create({
  headerInfo: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    flexDirection: "row",
  },
  sender: {
    fontWeight: "bold",
    fontFamily: "Helvetica",
    fontSize: 14,
    paddingTop: 15,
  },
  date: {
    fontFamily: "Helvetica",
    fontSize: 14,
    color: "grey",
    paddingTop: 15,
    position: "absolute",
    right: 20,
  },
  icon: {
    padding: 10,
  },
  subject: {
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

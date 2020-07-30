import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";

export default function Mail({ route }) {
  const { sender } = route.params;
  const { subject } = route.params;
  const { date } = route.params;
  const { content } = route.params;

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={singleMailStyles.headerInfo}>
        <View style={singleMailStyles.icon}>
          <Icon name="account-circle" size={40} color="#007aff"></Icon>
        </View>
        <View style={singleMailStyles.sender}>
          <Text style={singleMailStyles.sender}>{sender}</Text>
          <Text style={singleMailStyles.date}>{date}</Text>
        </View>
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
    borderBottomColor: "#c7c7cc",
    borderBottomWidth: 1,
    flexDirection: "row",
    width: "92%",
    alignSelf: "center",
  },
  sender: {
    fontWeight: "bold",
    fontSize: 14,
    paddingTop: 8,
  },
  date: {
    fontSize: 14,
    color: "#c7c7cc",
  },
  icon: {
    padding: 10,
    paddingLeft: 0,
  },
  subject: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

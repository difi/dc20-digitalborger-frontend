import { Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SPACE = 20;

interface FooterProps {
  description: string;
  link: string;
}

export default function Footer({ description, link }: FooterProps) {
  return (
    <View style={{ padding: SPACE, flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: SPACE }}>
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Kort fortalt
        </Text>
      </View>
      <View style={{ flex: 1, paddingBottom: SPACE }}>
        <Text style={{ color: "white" }}>{description}</Text>
      </View>
      <View style={{ flex: 1, alignSelf: "flex-end" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
          }}
          onPress={() => WebBrowser.openBrowserAsync(link)}
        >
          <Text style={{ color: "white" }}>Gå til</Text>
          <View style={{ paddingLeft: 7 }}>
            <Icon
              name="arrow-right-circle-outline"
              size={20}
              color={"white"}
            ></Icon>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

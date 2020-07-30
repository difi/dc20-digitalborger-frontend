import { Image, Text, View } from "react-native";
import * as React from "react";

const SPACE = 20;

interface HeaderProps {
  nameOfService?: string;
  logo: string;
}

export default function Header({ nameOfService, logo }: HeaderProps) {
  return (
    <View
      style={{
        backgroundColor: "white",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        padding: SPACE,
      }}
    >
      <View style={{ height: 100, width: 100 }}>
        <Image
          source={{
            uri: "https://www.kommunaljobb.no/files/pictures/vigo_logo.jpg",
          }}
          resizeMethod={"resize"}
          style={{ width: "100%", height: "100%", borderRadius: 100 }}
        />
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 30 }}>{nameOfService}</Text>
      </View>
    </View>
  );
}

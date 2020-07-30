import { Image, Text, View } from "react-native";
import * as React from "react";

const SPACE = 20;

interface HeaderProps {
  nameOfService?: string;
  logo: NodeRequire;
}

export default function Header({ nameOfService, logo }: HeaderProps) {
  return (
    <View
      style={{
          flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        padding: SPACE,
      }}
    >
      <View style={{ flex: 1, height: 100, width: 100, justifyContent: "center", alignItems: "center"}}>
        <Image
          source={logo}
          resizeMode={"contain"}
          style={{ flex: 1, width: "80%", height: "80%", borderRadius: 10, alignSelf: "center",
              justifyContent: "center", }}
        />
          {console.log(nameOfService)}
      </View>
        {(nameOfService !== undefined) && (
            <View style={{ flex: 2, justifyContent: "center", alignItems: "center"}}>
                <Text style={{ fontSize: 25 }}>{nameOfService}</Text>
            </View>
        )}
    </View>
  );
}

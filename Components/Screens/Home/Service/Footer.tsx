import {Text, View} from "react-native";
import * as React from "react";

const SPACE = 20;

interface FooterProps {
    description: string
}


export default function Footer({description}: FooterProps) {
    return (
        <View style={{padding: SPACE, backgroundColor: "#982C79"}}>
            <Text style={{textTransform: "uppercase", fontWeight: "bold", color: "white"}}>
                Kort fortalt
            </Text>
            <Text style={{color: "white"}}>
                {description}
            </Text>
        </View>
    );
}

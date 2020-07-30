import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "./assets/Button";

const SPACE = 20;

interface FooterProps {
    description: string
    link: string
}


export default function Footer({description, link}: FooterProps) {
    return (
        <View style={{padding: SPACE, flex: 1,}}>
            <View style={{flex: 1, paddingBottom: SPACE}}>
                <Text style={{textTransform: "uppercase", fontWeight: "bold", color: "white"}}>
                    Kort fortalt
                </Text>
            </View>
           <View style={{flex: 1, paddingBottom: SPACE}}>
               <Text style={{color: "white"}}>
                   {description}
               </Text>
           </View>
            <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(link)} style={{flex: 1, paddingTop: 10, alignSelf: "flex-end"}}>
               <Text style={{color: "white", fontWeight: "bold", textDecorationLine: "underline"}}>
                   Gå til hjemmeside
               </Text>
            </TouchableOpacity>
        </View>
    );
}

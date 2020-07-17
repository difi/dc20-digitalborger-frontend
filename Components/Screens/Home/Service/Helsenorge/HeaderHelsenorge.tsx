import {Image, Text, View} from "react-native";
import * as React from "react";

const SPACE = 20;

interface HeaderProps {
    nameOfService: string,
    logo: string,
}

export default function Header({nameOfService, logo}: HeaderProps) {
    return (
        <View style={{backgroundColor: "white", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", padding: SPACE}}>
            <View style={{height: 100, width: 100}}>
                <Image source={{uri: "https://is2-ssl.mzstatic.com/image/thumb/Purple30/v4/98/70/29/98702972-bc67-653e-6230-afa23cac6ae1/pr_source.png/246x0w.png"}}
                       resizeMethod={"resize"}
                       style={{width: "100%", height: "100%", borderRadius: 100}}
                />
            </View>
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 30}}>
                    {nameOfService}
                </Text>
            </View>
        </View>
    );
}
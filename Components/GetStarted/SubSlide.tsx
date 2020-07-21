import * as React from 'react';
import {Dimensions, SafeAreaView, ScrollView, Text, View} from "react-native";
import {interpolateColor, onScrollEvent, useValue} from "react-native-redash";
import Animated, {
    multiply,
    divide,
    Extrapolate,
    interpolate,
} from "react-native-reanimated";
import {useEffect} from "react";
const HEIGHT = Dimensions.get("window").height;

const { width } = Dimensions.get("window");

import  Button from "../Button"
import SvgComponent from "../../assets/SVG/SvgComponent";

interface SlidePageProps {
    title: string,
    description: string,
    onPress: () => void,
    last: boolean
}

export default function SubSlide({title, description, last, ...onPress} : SlidePageProps ){
    return(
        <View style={{width: width, padding: 25}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
                <View style={{flex: 1, paddingBottom: 10, justifyContent: "center"}}>
                    <Text style={{fontWeight: "bold", fontSize: 20}}>
                        {title}
                    </Text>
                </View>
                <View style={{flex:2, justifyContent: "center"}}>
                    <Text style={{color: "#0C0D34",}}>
                        {description}
                    </Text>
                </View>
                <View style={{flex:1, marginBottom: 10, marginTop: 10}}>
                    <Button {...onPress}  variant={last ? "primary" : "default"} label={last ? "Kom i gang!" : "Gå videre"}/>
                </View>
            </View>
        </View>
    );
}

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
    description: string
}

export default function SubSlide({title, description} : SlidePageProps ){
    return(
        <View style={{width: width, padding: 44}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
                <View style={{marginBottom: 12,}}>
                    <Text style={{fontWeight: "bold", fontSize: 20}}>
                        {title}
                    </Text>
                </View>
                <View style={{marginBottom: 44}}>
                    <Text style={{color: "#0C0D34",}}>
                        {description}
                    </Text>
                </View>
                <Button onPress={() => console.log("hello")}  variant={"primary"} label={"Gå videre"}/>
            </View>
        </View>
    );
}

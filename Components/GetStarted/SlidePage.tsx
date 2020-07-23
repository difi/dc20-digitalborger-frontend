import * as React from 'react';
import {Dimensions, Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import {interpolateColor, onScrollEvent, useValue} from "react-native-redash";
import Animated, {
    multiply,
    divide,
    Extrapolate,
    interpolate,
} from "react-native-reanimated";
import {useEffect} from "react";
import Profile from "../../assets/SVG/SvgComponent";
import SvgComponent from "../../assets/SVG/SvgComponent";
const HEIGHT = Dimensions.get("window").height;

const { width,height } = Dimensions.get("window");


export default function SlidePage({image}){
    return(
        <View style={{width: width, justifyContent: "center", alignItems: "center"}}>
            <Image source={image} style={{width: "75%", height: "75%", alignSelf: "center",}} resizeMode={"contain"}/>
        </View>
    );
}

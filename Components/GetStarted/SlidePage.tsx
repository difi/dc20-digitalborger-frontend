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

export default function SlidePage(){
    return(
            <View style={{ flex: 1, width: width, height: HEIGHT,}}>
                <View style={{flex: 2}}>

                </View>
                <View style={{flex: 1, backgroundColor: "white", borderTopLeftRadius: 75}}>
                    <Text>
                        tests
                    </Text>
                </View>
            </View>
    );
}

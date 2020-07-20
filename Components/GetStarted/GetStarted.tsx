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


export default function GetStarted({navigation}){

    const x = useValue(0);
    const onScroll = onScrollEvent({x});
    const backgroundColor = interpolateColor(x, {
        inputRange: [0, width],
        outputRange: ["#E7BF6A", "#9875AA"]
    });

    useEffect(() => {

    });

    return(

            <Animated.View style={{backgroundColor}}>
                <Animated.ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={"fast"}
                    snapToInterval={width}
                    scrollEventThrottle={1}
                    bounces= {false}
                    {...{onScroll}}
                >
                    <View style={{ width: width, height: HEIGHT, justifyContent: "center", alignItems: "center"}}>
                        <Text>
                            test
                        </Text>
                    </View>
                    <View style={{ width: width, height: HEIGHT, justifyContent: "center", alignItems: "center"}}>
                        <Text>
                            test
                        </Text>
                    </View>
                </Animated.ScrollView>
            </Animated.View>
    );
}

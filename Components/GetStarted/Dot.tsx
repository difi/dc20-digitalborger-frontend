import {View} from "react-native";
import * as React from "react";
import Animated, {Extrapolate, interpolate} from "react-native-reanimated";

interface DotProps {
    index: number,
    currentIndex: Animated.Node<number>;
}

const Dot = ({index, currentIndex}: DotProps) => {
    console.log(index);
    const opacity = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: Extrapolate.CLAMP,
    });

    const scale = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [1, 1.25, 1],
        extrapolate: Extrapolate.CLAMP,
    });

    return(
        <Animated.View style={{
            height: 8,
            width: 8,
            borderRadius: 100,
            backgroundColor: "#5CB6B0",
            marginRight: 5,
            transform: [{scale}],
            opacity
        }}/>
    );
}

export default Dot;

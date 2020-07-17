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
import SlidePage from "./SlidePage";
const HEIGHT = Dimensions.get("window").height;

const { width } = Dimensions.get("window");


const test = [
    {
        title: "hei"
    },
    {
        title: "gan"
    }
]

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

            <Animated.View style={{flex: 1, backgroundColor: "white"}}>
                <Animated.View style={{flex: 2, backgroundColor, borderBottomRightRadius: 75}}>
                    <Animated.ScrollView
                        horizontal = {true}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={"fast"}
                        snapToInterval={width}
                        scrollEventThrottle={1}
                        bounces= {false}
                        {...{onScroll}}
                    >
                        <View style={{width: width,}}>

                        </View>

                        <View style={{width: width,}}>

                        </View>
                    </Animated.ScrollView>
                </Animated.View>

               <Animated.View style={{flex: 1, backgroundColor}}>
                   <View style={{flex: 1, backgroundColor: "white",  borderTopLeftRadius: 75,}}>
                       <Animated.View style={{flex: 1, transform: [{translateX: multiply(x, -1)}], flexDirection: "row", width: width * test.length}}>
                           {test.map( (item, index) => (
                               <View style={{flex: 1, justifyContent: "center", alignItems: "center", }}>
                                   <Text>
                                       {item.title}
                                   </Text>
                               </View>
                           ))}
                       </Animated.View>
                   </View>
               </Animated.View>
            </Animated.View>
    );
}

import * as React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import {Component, useEffect, useState} from "react";
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import Fontisto from 'react-native-vector-icons/Fontisto';

// @ts-ignore
import Octicons from 'react-native-vector-icons/Octicons';

import Accordion from "react-native-collapsible/Accordion";
import {bInterpolatePath, mix, useTimingTransition, useTransition} from "react-native-redash";
import Animated, {interpolate} from "react-native-reanimated";

const SPACE = 20;

export function ListItem({parentCallback, pressed}) {
    let [toggled, setToggled] = useState(false);

    useEffect(() => {
        setToggled(pressed)
    }, [pressed])

    //const { interpolate } = Animated;
    const transition = useTransition(toggled, {duration: 200});

    const bottomRadius = interpolate(transition, {
        inputRange: [0, 16 / 400],
        outputRange: [0, 0.5]
    });

    const height = interpolate(transition, {
        inputRange: [0, 1],
        outputRange: [0, 105]
    });

    return(

        <View>
            <TouchableOpacity style={{flex: 1, backgroundColor: "red", height: 50}} onPress={() =>  {setToggled(val => !val); parentCallback(toggled)}}>
                <Text>
                    Header
                </Text>
            </TouchableOpacity>
            <Animated.View
                style={[{
                    flex: 1, borderBottomLeftRadius: bottomRadius,
                    borderBottomRightRadius: bottomRadius,
                    height: height, backgroundColor: "pink", overflow: "hidden"},
                ]}

            >
                <View style={{padding: 10}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    </View>
                </View>


            </Animated.View>
        </View>

    );
}

/*
 onLayout={(event) => {
                    console.log("HØYDE", event.nativeEvent.layout.height)
                }}
 */

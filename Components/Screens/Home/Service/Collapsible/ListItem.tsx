import * as React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    SafeAreaView,
    StyleSheet, TouchableWithoutFeedback,
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
import Chevron from "./Chevron";

const SPACE = 20;

interface ListItemProps {
    parentCallback: any,
    pressed: boolean,
    children: React.ReactNode,
    title: string,
    containerHeight: number
}


export function ListItem({parentCallback, pressed, children, title, containerHeight}: ListItemProps) {
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
        outputRange: [0, containerHeight]
    });



    return(

        <View style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={() =>  {setToggled(val => !val); parentCallback(toggled)}}>
                <View style={{flex: 1, backgroundColor: "white", height: 50,paddingLeft: 20, paddingRight: 20, justifyContent: "center", alignItems:"center", borderWidth: 0.5, borderColor: "#999999", flexDirection: "row"}}>
                       <View style={{flex: 1}}>
                            <Text>
                                {title}
                            </Text>
                       </View>
                    <View style={{flex: 1, justifyContent: "flex-end", flexDirection: "row"}}>
                        <Chevron open={toggled}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <Animated.View
                style={[{
                    flex: 1, borderBottomLeftRadius: bottomRadius,
                    borderBottomRightRadius: bottomRadius,
                    height: height, backgroundColor: "#F3F3F3", overflow: "hidden"},
                ]}
            >

                    {children}
            </Animated.View>
        </View>

    );
}

/*
 onLayout={(event) => {
                    console.log("HØYDE", event.nativeEvent.layout.height)
                }}
 */

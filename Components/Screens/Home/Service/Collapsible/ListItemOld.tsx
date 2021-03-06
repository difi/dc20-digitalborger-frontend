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
import Octicons from 'react-native-vector-icons/Octicons';
// @ts-ignore
import Fontisto from 'react-native-vector-icons/Fontisto';

// @ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';

import Accordion from "react-native-collapsible/Accordion";
import {bInterpolatePath, mix, useTimingTransition, useTransition} from "react-native-redash";
import Animated, {interpolate} from "react-native-reanimated";

const SPACE = 20;

interface ListItemProps {
    parentCallback: any,
    pressed: boolean,
    children: React.ReactNode,
    title: string,
    containerHeight: number
    iconName: string,
    iconType: string
}


export function ListItem({parentCallback, pressed, children, title, containerHeight, iconName, iconType}: ListItemProps) {
    let [toggled, setToggled] = useState(false);

    useEffect(() => {
        setToggled(pressed)
    }, [pressed])

    const transition = useTransition(toggled, {duration: 200});

    const bottomRadius = interpolate(transition, {
        inputRange: [0, 16 / 400],
        outputRange: [0, 0.5]
    });

    const height = interpolate(transition, {
        inputRange: [0, 1],
        outputRange: [0, containerHeight]
    });


    const rotatee = interpolate(transition, {
        inputRange: [0, 1],
        outputRange: [0, Math.PI]
    });

    function fontType (type: string, name: string, color: string, size: number){
        switch (type) {
            case "Fontisto":
                return(
                    <Fontisto name={name} color={color} size={size} />
                );
            case "FontAwesome":
                return(
                    <FontAwesome name={name} color={color} size={size} />
                );
            case "MaterialIcons":
                return(
                    <MaterialIcons name={name} color={color} size={size} />
                );
            default:
                return (
                    <Octicons name={"info"} color={"black"} size={26} />
                );
        }
    }

    return(

        <View style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={() =>  {setToggled(val => !val); parentCallback(toggled)}}>
                <View style={{flex: 1, backgroundColor: "white", height: 50,paddingLeft: 20, paddingRight: 20, justifyContent: "center", alignItems:"center", borderWidth: 0.5, borderColor: "#999999", flexDirection: "row"}}>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        {fontType(iconType, iconName, "black", 26)}
                    </View>
                    <View style={{flex: 6}}>
                        <Text style={{fontWeight: "bold", letterSpacing: 0.5}}>
                            {title}
                        </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: "flex-end", flexDirection: "row"}}>
                        <Animated.View style={{transform: [{rotate: rotatee}]}}>
                            <Entypo name={"chevron-down"} color={"black"} size={26} />
                        </Animated.View>
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

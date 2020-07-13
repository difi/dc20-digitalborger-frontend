import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Animated
} from 'react-native';
import {Component, useEffect, useRef, useState} from "react";
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// @ts-ignore
import Octicons from 'react-native-vector-icons/Octicons';
// @ts-ignore
import Fontisto from 'react-native-vector-icons/Fontisto';

// @ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// @ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';




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
    const height = useRef(new Animated.Value(1)).current;
    const rotate = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        setToggled(pressed)
    }, [pressed])

    useEffect(() => {
        Animated.timing(height, {
            toValue: toggled ? 1 : 0,
            duration: 200,
            useNativeDriver: false
        }).start();

        Animated.timing(rotate, {
            toValue: toggled ? 1 : 0,
            duration: 200,
            useNativeDriver: true
        }).start();
    }, [toggled]);




    const saveButtonHeight = height.interpolate({
        inputRange: [0, 1],
        outputRange: [0, containerHeight],
    });


    const rotatee = rotate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Math.PI]})




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
            case "FontAwesome5":
                return(
                    <FontAwesome5 name={name} color={color} size={size}/>
                );
            default:
                return (
                    <Octicons name={"info"} color={"black"} size={26} />
                );
        }
    }

    return(

        <View>
            <TouchableOpacity
                style={{flex: 1, backgroundColor: 'red', height: 50}}
                onPress={() => {setToggled((prev) => !prev); parentCallback(toggled)}}>
                <View style={{flex: 1, backgroundColor: "white", height: 50, paddingLeft: SPACE, paddingRight: SPACE, justifyContent: "center", alignItems:"center", borderWidth: 0.5, borderColor: "#999999", flexDirection: "row"}}>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        {fontType(iconType, iconName, "black", 26)}
                    </View>
                    <View style={{flex: 6}}>
                        <Text style={{fontWeight: "bold", letterSpacing: 0.5}}>
                            {title}
                        </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: "flex-end", flexDirection: "row"}}>
                        <Animated.View  style={{transform: [{rotate: rotatee}]}}>
                            <Entypo name={"chevron-down"} color={"black"} size={26} />
                        </Animated.View>
                    </View>
                </View>
            </TouchableOpacity>
            <Animated.View
                style={{flex: 1,backgroundColor: '#F3F3F3', height: saveButtonHeight, overflow: "hidden"}}>
                {children}
            </Animated.View>
        </View>

    );
}

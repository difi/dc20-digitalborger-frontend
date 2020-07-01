import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {Text, View, StyleSheet, Animated, TouchableOpacity} from 'react-native';

// @ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';
import {interpolate} from "react-native-reanimated";

interface CehvronProps {
    open: boolean
}

export default function Chevron({open}: CehvronProps) {
    let [toggled, setToggled] = useState(true);


    const rotateZ = () => open ? "180deg" : "0deg";

    useEffect(() => {
        setToggled(open)
       console.log("Chevron", toggled)
    }, [open])

    return (
        <View style={{}}>
            <Entypo name={"chevron-down"} color={"black"} size={26} />
        </View>
    );
}

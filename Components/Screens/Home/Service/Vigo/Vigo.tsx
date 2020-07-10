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
import VeienTilForerkort from "../Vegvesenet/VeienTilForerkort";
import {ListItem} from "../Collapsible/ListItem";
import Header from "../Header";
import Footer from "../Footer";
import Absence from "./Absence";
import Grades from "./Grades";
import School from "./School";


const VIGO  = [
    {
        title: 'Karakterer',
        icon: {
            type: "Fontisto",
            name: "bar-chart"
        },
        content: {
            description: "description"
        }
    },
    {
        title: 'Fravær',
        icon: {
            type: "FontAwesome",
            name: "calendar"
        },
        content: {
            description: "test"
        }
    },
    {
        title: 'Søk skole',
        icon: {
            type: "MaterialIcons",
            name: "school"
        },
        content: {
            description: "description"
        }
    },
];


const SPACE = 20;

export function Vigo() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    return(
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor: "#982C79"}} showsVerticalScrollIndicator={false}>
                <Header logo={"https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg"} nameOfService={"Vigo"}/>
                <View>
                    <ListItem key={0} iconName = {VIGO[0].icon.name} iconType={VIGO[0].icon.type} containerHeight={300} title={VIGO[0].title} parentCallback={(item) => {setSelectedIndex(0); console.log("toggled", item)}} pressed={(selectedIndex === 0) ? true : false}>
                        <View style={{padding: 10, flex: 1}}>
                            <Grades/>
                        </View>
                    </ListItem>

                    <ListItem key={1} iconName = {VIGO[1].icon.name} iconType={VIGO[1].icon.type} containerHeight={400} title={VIGO[1].title} parentCallback={(item) => {setSelectedIndex(1); console.log("toggled", item)}} pressed={(selectedIndex === 1) ? true : false}>
                        <View style={{padding: 10, flex: 1}}>
                            <View style={{flex: 1}}>
                                <Absence/>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem key={2} iconName = {VIGO[2].icon.name} iconType={VIGO[2].icon.type} containerHeight={420} title={VIGO[2].title} parentCallback={(item) => {setSelectedIndex(2); console.log("toggled", item)}} pressed={(selectedIndex === 2) ? true : false}>
                        <View style={{padding: 10, flex: 1}}>
                            <View>
                                <Text style={{fontWeight: 'bold'}}>   Skolenavn                                      Distanse             Nettside</Text>
                                <School/>
                            </View>
                        </View>
                    </ListItem>
                </View>
                <Footer description={"Her kommer innhold"}/>
            </ScrollView>
        </SafeAreaView>
    );
}



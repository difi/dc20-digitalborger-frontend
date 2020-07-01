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
import {ListItem} from "./ListItem";
import VeienTilForerkort from "../../../Vegvesenet/VeienTilForerkort";
import {Collapsible} from "../Collapsible/Collapsible";


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

                    <Collapsible key={0} iconName = {VIGO[0].icon.name} iconType={VIGO[0].icon.type} containerHeight={800} title={VIGO[0].title} >
                        <VeienTilForerkort/>
                    </Collapsible>
                <Footer description={"Her kommer innhold"}/>
            </ScrollView>
        </SafeAreaView>
    );
}

/*
 {VIGO.map((item, index) =>
                    <Collapsible index={index} iconName = {item.icon.name} iconType={item.icon.type} containerHeight={800} title={item.title} >
                        <VeienTilForerkort/>
                    </Collapsible>
                )}
 */

interface HeaderProps {
    nameOfService: string,
    logo: string,
}

function Header({nameOfService, logo}: HeaderProps) {
    return (
        <View style={{backgroundColor: "white", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", padding: SPACE}}>
            <View style={{height: 100, width: 100}}>
                <Image source={{uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg"}}
                       resizeMethod={"resize"}
                       style={{width: "100%", height: "100%", borderRadius: 100}}
                />
            </View>
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 30}}>
                    {nameOfService}
                </Text>
            </View>
        </View>
    );
}

interface FooterProps {
    description: string
}


function Footer({description}: FooterProps) {
    return (
        <View style={{padding: SPACE, backgroundColor: "#982C79"}}>
            <Text style={{textTransform: "uppercase", fontWeight: "bold", color: "white"}}>
                Kort fortalt
            </Text>
            <Text style={{color: "white"}}>
                {description}
            </Text>
        </View>
    );
}

import * as React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {SafeAreaView, ScrollView, Text, View} from "react-native";
import Header from "../Header";
import HeaderSkatt from "./HeaderSkatt";
import {ListItem} from "../Collapsible/ListItem";
import Grades from "../Vigo/Grades";
import {useEffect, useState} from "react";
import Footer from "../Footer";
import Frikort from "./Frikort";
import SkatteMelding from "./SkatteMelding";
import Skattekort from "../../../Skattekort";
import Skattegiver from "../../../Skattegiver";


const SKATT  = [
    {
        title: 'Søk skattekort',
        icon: {
            type: "FontAwesome",
            name: "money"
        },
        content: {
            description: "test1"
        }
    },
    {
        title: 'Søk frikort',
        icon: {
            type: "FontAwesome",
            name: "suitcase"
        },
        content: {
            description: "test2"
        }
    },
    {
        title: 'Din skattemelding',
        icon: {
            type: "FontAwesome",
            name: "archive",
        },
        content: {
            description: "test3"
        }
    },
    {
        title: 'Om ditt skattekort',
        icon: {
            type: "FontAwesome",
            name: "id-card"
        },
        content: {
            description: "test4"
        }
    },

];

export function Skatteetaten({route}){
    const { open } = route.params;
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        if(open !== null){
            switch (open) {
                case 'Søk skattekort':
                    setSelectedIndex(0);
                    break;
                case 'Søk frikort':
                    setSelectedIndex(1);
                    break;
                case  'Din skattemelding':
                    setSelectedIndex(2);
                    break;
                case 'Om ditt skattekort':
                    setSelectedIndex(3);
                    break;
            }
        }
    });

    return(
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor: "#6f2c3f"}} showsVerticalScrollIndicator={false}>
            <HeaderSkatt logo={"Components/Screens/Home/Service/Skatteetaten/HeaderSkatt.tsx"} nameOfService={"Skatteetaten"}/>
            <View>
                <ListItem key={0} iconName = {SKATT[0].icon.name} iconType={SKATT[0].icon.type} containerHeight={200} title={SKATT[0].title} parentCallback={(item) => {setSelectedIndex(0); console.log("toggled", item)}} pressed={(selectedIndex === 0) ? true : false}>
                    <View style={{padding: 10, flex: 1}}>
                        <Skattekort/>
                    </View>
                </ListItem>

                <ListItem key={1} iconName = {SKATT[1].icon.name} iconType={SKATT[1].icon.type} containerHeight={200} title={SKATT[1].title} parentCallback={(item) => {setSelectedIndex(1); console.log("toggled", item)}} pressed={(selectedIndex === 1) ? true : false}>
                    <View style={{padding: 10, flex: 1}}>
                        <Frikort/>
                    </View>
                </ListItem>

                <ListItem key={2} iconName = {SKATT[2].icon.name} iconType={SKATT[2].icon.type} containerHeight={300} title={SKATT[2].title} parentCallback={(item) => {setSelectedIndex(2); console.log("toggled", item)}} pressed={(selectedIndex === 2) ? true : false}>
                    <View style={{padding: 10, flex: 1}}>
                        <SkatteMelding/>
                    </View>
                </ListItem>

                <ListItem key={3} iconName = {SKATT[3].icon.name} iconType={SKATT[3].icon.type} containerHeight={300} title={SKATT[3].title} parentCallback={(item) => {setSelectedIndex(3); console.log("toggled", item)}} pressed={(selectedIndex === 3) ? true : false}>
                    <View style={{padding: 10, flex: 1}}>
                        <Skattegiver/>
                    </View>
                </ListItem>

            </View>
            <Footer description={"Skatteetaten er en norsk statlig etat underlagt finansdepartementet. Skatteetaten har ansvar for folkeregistrering og fastsettelse og innkreving av skatt og merverdiavgift.\n"}/>
        </ScrollView>
        </SafeAreaView>
    )

}



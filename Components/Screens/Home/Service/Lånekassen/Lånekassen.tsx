import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {SafeAreaView, ScrollView, Text, View} from "react-native";
import Footer from "../Footer";
import {useState} from "react";
import {ListItem} from "../Collapsible/ListItem"

import Header from "../Header";
import Utbetaling from "./Utbetaling";


const LAANEKASSE  = [
    {
        title: 'Søknad om lån og stipend',
        icon: {
            type: "FontAwesome5",
            name: "file-signature",
        },
        content: {
            description: "test1"
        }
    },
    {
        title: 'Din gjeld',
        icon: {
            type: "FontAwesome5",
            name: "coins"
        },
        content: {
            description: "test2"
        }
    },
    {
        title: 'Dine utbetalinger',
        icon: {
            type: "FontAwesome5",
            name: "hand-holding-usd",
        },
        content: {
            description: "test3"
        }
    },

];

export function Lanekassen(){

    const [selectedIndex, setSelectedIndex] = useState(null);

    return(
        <SafeAreaView style={{flex: 1}}>
            <Header logo={"Components/Screens/Home/Service/Lånekassen/Lånekassen.tsx"} nameOfService={"Lånekassen"}/>
            <ScrollView style={{flex: 1, backgroundColor: '#97469d'}} showsVerticalScrollIndicator={false}>
                <View>
                    <ListItem key={0} iconName={LAANEKASSE[0].icon.name} iconType={LAANEKASSE[0].icon.type} containerHeight={200} title={LAANEKASSE[0].title} parentCallback={(item) => {setSelectedIndex(0); console.log("toggled", item)}} pressed={(selectedIndex === 0) ? true : false}>
                        <View style={{padding: 10, flex: 1}}>
                            <FontAwesome5 name='hand-holding-usd' size={26}></FontAwesome5>
                            <FontAwesome5 name='coins' size={26}></FontAwesome5>
                            <FontAwesome5 name='file-signature' size={26}></FontAwesome5>
                        </View>
                    </ListItem>

                    <ListItem key={1} iconName = {LAANEKASSE[1].icon.name} iconType={LAANEKASSE[1].icon.type} containerHeight={175} title={LAANEKASSE[1].title} parentCallback={(item) => {setSelectedIndex(1); console.log("toggled", item)}} pressed={(selectedIndex === 1) ? true : false}>
                        <View style={{padding: 10, flex: 1}}>
                            <Text>A</Text>
                        </View>
                    </ListItem>

                    <ListItem key={2} iconName = {LAANEKASSE[2].icon.name} iconType={LAANEKASSE[2].icon.type} containerHeight={300} title={LAANEKASSE[2].title} parentCallback={(item) => {setSelectedIndex(2); console.log("toggled", item)}} pressed={(selectedIndex === 2) ? true : false}>
                        <View style={{padding: 10, flex: 1}}>
                            <Utbetaling/>
                        </View>
                    </ListItem>
                </View>
                <Footer description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
            </ScrollView>
        </SafeAreaView>
    )

}
import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import {SafeAreaView, ScrollView, Text, View} from "react-native";
import Footer from "../Footer";
import {useState} from "react";
import {ListItem} from "../Collapsible/ListItem"


import Utbetaling from "./Utbetaling";
import Header from "./HeaderLan";
import Support from "./Support";
import StipendLån from "../../../Vigo/StipendLån";


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
        title: 'Støttebeløp til elever',
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
                    <ListItem key={0} iconName={LAANEKASSE[0].icon.name} iconType={LAANEKASSE[0].icon.type} containerHeight={260} title={LAANEKASSE[0].title} parentCallback={(item) => {setSelectedIndex(0); console.log("toggled", item)}} pressed={(selectedIndex === 0) ? true : false}>
                        <View style={{padding: 10, flex: 1}}>
                           <StipendLån></StipendLån>
                        </View>
                    </ListItem>

                    <ListItem key={1} iconName = {LAANEKASSE[1].icon.name} iconType={LAANEKASSE[1].icon.type} containerHeight={300} title={LAANEKASSE[1].title} parentCallback={(item) => {setSelectedIndex(1); console.log("toggled", item)}} pressed={(selectedIndex === 1) ? true : false}>
                        <View style={{padding: 10, flex: 1}}>
                            <Support/>
                        </View>
                    </ListItem>

                    <ListItem key={2} iconName = {LAANEKASSE[2].icon.name} iconType={LAANEKASSE[2].icon.type} containerHeight={300} title={LAANEKASSE[2].title} parentCallback={(item) => {setSelectedIndex(2); console.log("toggled", item)}} pressed={(selectedIndex === 2) ? true : false}>
                        <View style={{padding: 10, flex: 1}}>
                            <Utbetaling/>
                        </View>
                    </ListItem>
                </View>
                <Footer description={"Statens lånekasse for utdanning er et statlig forvaltningsorgan underlagt Kunnskapsdepartementet. Lånekassen gir stipend og lån til utdanning i Norge og utlandet, og administrerer tilbakebetaling av studielån."}/>
            </ScrollView>
        </SafeAreaView>
    )

}
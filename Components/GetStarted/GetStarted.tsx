import * as React from 'react';
import {Dimensions, SafeAreaView, ScrollView, Text, View} from "react-native";
import {interpolateColor, onScrollEvent, useValue} from "react-native-redash";
import Animated, {
    multiply,
    divide,
    Extrapolate,
    interpolate,
} from "react-native-reanimated";
import {useEffect, useRef} from "react";
import SlidePage from "./SlidePage";
import SubSlide from "./SubSlide";
import Dot from "./Dot";
const HEIGHT = Dimensions.get("window").height;

const { width } = Dimensions.get("window");


const Info = [
    {
        title: "Ung Borger",
        description: "Er en app som samler dine personlige opplysninger på et sted!"
    },
    {
        title: "Offentlige tjenester",
        description: "Gjennom denne appen kan du finne informasjon som omhandler Vigo, Helsenorge, Skatteetaten, Vegvesnet, Politiet og Lånekassen."
    },
    {
        title: "Sikkerhet med ID porten",
        description: "For å kunne få oversikt over alle våre tjenester er du nødt til å logge inn med MinID eller BankID. Dette gjøres gjennom noe som heter ID porten."
    },
]

const assets = [
    require("../../assets/Illustrations/auth.png"),
    require("../../assets/Illustrations/services.png"),
    require("../../assets/Illustrations/phone.png"),
]

export default function GetStarted({navigation}){
    const scroll = useRef<Animated.ScrollView>(null);
    const x = useValue(0);
    const onScroll = onScrollEvent({x});
    const backgroundColor = interpolateColor(x, {
        inputRange: [0, width, width * 2],
        outputRange: ["#E7BF6A", "#7899B7", "#9875AA"]
    });

    return(

            <Animated.View style={{flex: 1, backgroundColor: "white"}}>
                <Animated.View style={{flex: 2, backgroundColor, borderBottomRightRadius: 75}}>
                    <Animated.ScrollView
                        ref = {scroll}
                        horizontal = {true}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={"fast"}
                        snapToInterval={width}
                        scrollEventThrottle={1}
                        bounces= {false}
                        {...{onScroll}}
                    >
                        {assets.map(({}, index) => (
                            <SlidePage key={index} image={assets[index]}/>
                        ))}

                    </Animated.ScrollView>
                </Animated.View>

               <Animated.View style={{flex: 1, backgroundColor}}>
                   <View style={{flex: 1, backgroundColor: "white",  borderTopLeftRadius: 75,}}>
                       <View style={{paddingTop: 30, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                           {Info.map(({}, index) => (
                               <Dot key={index} currentIndex={divide(x, width)} {...{ index }}/>
                           ))}
                       </View>
                       <Animated.View style={{flex: 1, transform: [{translateX: multiply(x, -1)}], flexDirection: "row", width: width * Info.length,}}>
                           {Info.map( ({title, description}, index) => {
                               const last = index === Info.length - 1;
                               return(
                                   (
                                       <SubSlide
                                           key={index}
                                           title={title}
                                           description={description}
                                           onPress={() => {
                                               if (last) {
                                                   navigation.navigate("Login");
                                               } else {
                                                   scroll.current
                                                       ?.getNode()
                                                       .scrollTo({ x: width * (index + 1), animated: true });
                                               }}}
                                           last={last}
                                       />
                                   )
                               );
                           })}
                       </Animated.View>
                   </View>
               </Animated.View>
            </Animated.View>
    );
}

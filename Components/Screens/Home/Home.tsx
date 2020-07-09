import * as React from 'react';
import {
    Button,
    Dimensions, FlatList, Image,
    ImageBackground,
    SafeAreaView, ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Login from "../../Login/Login";
import ScreenTabs from "../ScreenTabs";
import { createStackNavigator } from '@react-navigation/stack';
import {Vigo} from "./Service/Vigo/Vigo";
import {Skatteetaten} from "./Service/Skatteetaten/Skatteetaten";


const Images = [
    { name: "NAV", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Vigo", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Vegvesnet", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Lånekassen", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Vegvesnet", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Lånekassen", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Vegvesnet", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Lånekassen", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
];

const PopularServices = [
    { name: "Søknadsfrister", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Hvordan sjekke skatt", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Bytte bolig", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Lånekassen", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Vegvesnet", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Lånekassen", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Vegvesnet", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
    { name: "Lånekassen", uri: "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg" },
];

const VIGO2  = [
    {
        name: "vigo",
        info: "Vigo er en internettportal for søking til videregående opplæring i skole og bedrift, fagskoleutdanning og videregående opplæring for voksne og realkompetansevurdering. Vigo er eid av Vigo IKS som er et interkommunalt selskap, og er et samarbeid mellom alle fylkene i Norge i tillegg til Oslo kommune.",
        function: [{
            title: 'karakterer',
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
            }],
    }
];

const Skatt2 = [
    {
        name: "Skatteetaten"
    }
]



//TODO: remove, temporary for design
function calculateHeightOfCircle(offset: number) {
    return Dimensions.get("window").width / 2 - offset;
}

const Stack = createStackNavigator();

function AllServices({navigation}) {
    return (
        <SafeAreaView style={styles.gridContainer}>
            <ScrollView  style={styles.gridContainer}
                         showsVerticalScrollIndicator={false}>

                <FlatList
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    style={stylesTop.gridContainer}
                    data={PopularServices} renderItem={({item, index}) => (
                    <TouchableOpacity key = {index} onPress={() => console.log("index clicked", index)} style={stylesTop.item}>
                        <View style={stylesTop.imageContainer}>
                            <Image source={{uri: item.uri}}
                                   resizeMethod={"resize"}
                                   style={stylesTop.image}
                            />
                        </View>
                        <View style={stylesTop.textContainer}>
                            <Text style={stylesTop.buttonText}>
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}

                />

                <View style={stylesBottom.gridContainer}>
                    {VIGO2.map((image, index) =>
                        <TouchableOpacity onPress={() => navigation.navigate("Vigo")} key = {index} style={stylesBottom.item}>
                            <Image source={{uri: image.uri}}
                                   resizeMethod={"resize"}
                                   style={stylesBottom.image}
                            />
                            <View style={stylesBottom.textContainer}>
                                <Text style={stylesBottom.buttonText}>
                                    {image.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>



                <View style={stylesBottom.gridContainer}>
                    {Skatt2.map((image, index) =>
                        <TouchableOpacity onPress={() => navigation.navigate("Skatteetaten")} key = {index} style={stylesBottom.item}>
                            <Image source={{uri: image.uri}}
                                   resizeMethod={"resize"}
                                   style={stylesBottom.image}
                            />
                            <View style={stylesBottom.textContainer}>
                                <Text style={stylesBottom.buttonText}>
                                    {image.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>


            </ScrollView>

        </SafeAreaView>
    );
}

export default function Home() {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name={"Offentlige tjenester"} component={AllServices}/>
            <Stack.Screen name={"Vigo"} component={Vigo}/>
            <Stack.Screen name={"Skatteetaten"} component={Skatteetaten}/>

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    gridContainer: {flex: 1},
});

const stylesTop = StyleSheet.create({
    gridContainer: {paddingBottom: 10, paddingTop: 10, flex: 1, borderBottomWidth: 2, borderColor: "#C0C0C0",},
    item: {justifyContent: "center", marginRight: 30, marginLeft: 20, alignItems: "center"},
    imageContainer: {height: 50, width: 50},
    image: {width: "100%", height: "100%", borderRadius: 100},
    textContainer: {alignSelf: "center", marginTop: 10},
    buttonText: {fontSize: 13, fontWeight: "bold"},

});

const stylesBottom = StyleSheet.create({
    gridContainer: {flex: 6, display: "flex", flexDirection: "row", flexWrap: "wrap"},
    item: { margin: 20, marginBottom: 50, height: calculateHeightOfCircle(40), width: Dimensions.get("window").width / 2 - 40},
    image: {width: "100%", height: "100%", alignSelf: "center",},
    textContainer: {alignSelf: "center", marginTop: 10},
    buttonText: {textTransform: "uppercase", fontSize: 13, fontWeight: "bold"},
});

import * as React from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TouchableNativeFeedback, SafeAreaView
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




/*
 <Image source={{uri: logo}}
                   resizeMethod={"resize"}
                   style={{width: "100%", height: "100%", alignSelf: "center"}}
            />
 */

const SPACE = 20;

interface ServiceProps {
    route: any,
}

/*
     <ScrollView style={{ flex: 1, backgroundColor: "#982C79"}}>
          <Header logo={"https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg"} nameOfService={name}/>
          <Content></Content>
          <Footer description={"Her kommer innhold"}/>
      </ScrollView>


            <View style={{flex: 1, backgroundColor: "white"}}>
          <ScrollView>

              <Header logo={"https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg"} nameOfService={name}/>
              <Content></Content>
              <Footer description={"Her kommer innhold"}/>

          </ScrollView>
      </View>
 */

export default function Service({route}: ServiceProps) {
    const { itemId } = route.params;
    const { name } = route.params;
    const { functions } = route.params;

    useEffect(() => {
        functions.map((item) => console.log("hallo",item));
    })

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor: "#982C79"}} showsVerticalScrollIndicator={false}>
                <Header logo={"https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg"} nameOfService={name}/>
                <Content/>
                <Footer description={"Her kommer innhold"}/>
            </ScrollView>
        </SafeAreaView>
    );
}

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


function Content() {
    const [visible, setVisible] = useState(false);

    const header = () => {
        return (
            <View>
                <Text>
                    test
                </Text>
            </View>
        );
    }


    return(
        <View>
            <AccordionView/>
        </View>
    );
}

const VIGO  = [
    {
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
    },
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

class AccordionView extends Component {
    state = {
        activeSections: [],
    };

    _renderSectionTitle = section => {
        return (
            <View style={{width: Dimensions.get("window").width}}>
                <Text>{section.title}</Text>
            </View>
        );
    };

    fontType = (type: string, name: string, color: string, size: number) => {
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

    _renderHeader = section => {
        return (
            <View style={{display: "flex", width: Dimensions.get("window").width, height: 50, flexDirection: "row", backgroundColor: "white", borderTopWidth: 0.5, borderColor: "#EBEDEF" }}>
                <View style={{flex: 1, height: "100%", width: "100%", paddingLeft: SPACE, flexDirection: "row"}}>
                    <View style={{justifyContent: "center", alignItems: "center", width: 30, }}>
                        {this.fontType(section.icon.type, section.icon.name, "black", 26)}
                    </View>

                    <View style={{justifyContent: "center", paddingLeft: SPACE}}>
                        <Text style={{textTransform: "uppercase", fontWeight: "bold"}}> {section.title}</Text>
                    </View>

                </View>
                <View style={{flex: 1, alignItems: "flex-end", height: "100%", width: "100%", justifyContent: "center", paddingRight: SPACE}}>
                    <Ionicons name="ios-arrow-down" color={"black"} size={26} />
                </View>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={{backgroundColor: "#EBEDEF", width: Dimensions.get("window").width, padding: SPACE}}>
                <Text>{section.content.description}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    componentDidMount(): void {
        VIGO2.map((item,index) => {console.log("t",item.function[0])})
    }

    render() {
        return (
            <Accordion
                sections={VIGO}
                activeSections={this.state.activeSections}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
            />
        );
    }
}

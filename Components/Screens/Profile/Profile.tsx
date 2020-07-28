import * as React from "react";
import {
    StyleSheet,
    View, SafeAreaView, Text, TouchableOpacity, TextInput, Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Dude from "./assets/Dude";
// @ts-ignore
import ProfileHeader from "./assets/ProfileHeader";
import {useState} from "react";


interface CardProps {
    icon: string;
    data: string;
    editable: boolean;
}

const Card = ({icon, data, editable}: CardProps) => {
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(data);
    const [changeLayout, setChangeLayout] = useState(false);
    return(
        <View style={{maxHeight: 100, backgroundColor: "white", borderRadius: 20, marginBottom: 20, flexDirection: "row",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 7,

            elevation: 5,}}>
            <View style={{flex: 1, margin: 20}}>
                <View style={{flex: 1, margin: 20, justifyContent: "center", alignItems: "center"}}>
                    <View style={{width: 50, height: 50, backgroundColor: "#68CE67", borderRadius: 100, justifyContent: "center", alignItems: "center",}}>
                        <FontAwesome name={icon} size={30} color={"white"} />
                    </View>
                </View>
            </View>

            <View style={{flex: 3, }}>
                {changeLayout ? (
                    <View style={{ flex: 1, justifyContent: "center",}}>
                        <TextInput
                            style={{borderWidth: 1, borderColor: "gray", borderRadius: 10, alignItems: "center", padding: 10}}
                            onChangeText={text => setValue(text)}
                            value={value}
                        />
                    </View>

                ) : (
                    <View style={{flex: 1, alignItems: "center",  justifyContent: "center",}}>
                        <Text style={{ fontSize: 16}}>
                            {value}
                        </Text>
                    </View>
                )}
            </View>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                {editable ? (
                    <TouchableOpacity onPress={() => setChangeLayout(!changeLayout)}>
                        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            {changeLayout ? (
                                <View style={{ width: 50, height: 40,backgroundColor: "#68CE67", justifyContent: "center", alignItems: "center", borderRadius: 5}}>
                                    <Text style={{color: "white", fontWeight: "bold"}}>
                                        Lagre
                                    </Text>
                                </View>
                            ) : (
                                <FontAwesome name="edit" size={20} color={"black"} />
                            )}
                        </View>
                    </TouchableOpacity>
                ) : (<View/>)}
            </View>
        </View>
    );
}

export default function Profile() {
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#A4D7F4"}}>
          <Text style={styles.heading}>Din Profil</Text>
          <View style={{flex: 1, backgroundColor: "#A4D7F4"}}>
              <View style={{flex: 1, backgroundColor: "white"}}>
                  <View style={{flex: 1, backgroundColor: "#A4D7F4", borderBottomRightRadius: 75, justifyContent: "center"}}>
                      <ProfileHeader width={"100%"} height={"100%"}/>
                  </View>
              </View>
              <View style={{flex: 2, backgroundColor: "white", borderTopLeftRadius: 55, padding: 25, paddingTop: 30}}>
                  <View style={{flex: 1}}>
                      <Card icon={"user"} data={"Jørgen Hollum"} editable={true}/>
                  </View>
                  <View style={{flex: 1}}>
                      <Card icon={"home"} data={"Kong inges gt 22"} editable={true}/>
                  </View>
                  <View style={{flex: 1}}>
                      <Card icon={"phone"} data={"+47 90910636"} editable={true}/>
                  </View>
                  <TouchableOpacity style={{flex: 1}}>
                      <Card icon={"book"} data={"Din historikk"} editable={false}/>
                  </TouchableOpacity>
              </View>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "Helvetica",
        marginTop: 10,
        padding: 20,
    },
    icon: {
    height: 55,
    width: 55,
    alignSelf: "flex-end",
    marginTop: 15,
      marginRight: 15
  },
  profilIcon: {
    alignSelf: "center",
    bottom: 10,
  },
  linksContainer: {
    top: "10%",
    left: 30,
    height: "10%",
  },
  links: {
    flexDirection: "row",
    alignItems: "center",
  },
});

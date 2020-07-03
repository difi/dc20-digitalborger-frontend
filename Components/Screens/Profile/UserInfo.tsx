import * as React from "react";
import Icon from "react-native-vector-icons/AntDesign";


import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const uri = [
    {
      epostIcon:
        "https://seeklogo.com/images/M/mail-icon-logo-28FE0635D0-seeklogo.com.png",
      userIcon: "https://clipartart.com/images/grey-facebook-clipart-13.jpg",
    },
  ];
  
  const persons = {
    name: "Linda Hansen",
    birth: " 01.01.2002",
    address: "Dalen 24",
    streetAddress: " 6863, Leikanger",
    email: "Linda.Hansen@gmail.com",
    number: " 12345678",
  };


  // Slutt data 

export default function UserInfo() {
    return (
        <View style={styles.centerContainer}>
        <Image source={{ uri: uri[0].userIcon }} style={styles.profileIcon}/>


            <View style={styles.userInfoContainer}>
                <View style={styles.iconContainer}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name="user" size={40} />
                    <View style={styles.textContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}> {persons.name}</Text>
                        <Text>{persons.birth} </Text>
                    </View>
                </View>
                </View>
            </View>
            <View style={styles.userInfoContainer}>
                <View style={styles.iconContainer}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name="home" size={40} />
                    <View style={styles.textContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}> {persons.address}</Text>
                        <Text>{persons.streetAddress} </Text>
                    </View>
                </View>
                </View>
            </View>
            <View style={styles.userInfoContainer}>
                <View style={styles.iconContainer}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name="phone" size={40} />
                    <View style={styles.textContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}> {persons.email}</Text>
                        <Text>{persons.number} </Text>
                    </View>
                </View>
                </View>
            </View>



            <View style={styles.centerButtonsContainer}>
                    <View style={styles.linksContainer}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="export" size={20} />
                            <Button
                                title="ENDRE E-POST ELLER MOBIL"
                                color="black"
                                onPress={() =>
                                    Linking.openURL(
                                        "https://www.skatteetaten.no/person/folkeregister"
                                    )
                                }
                            ></Button>
                    </View>
                <View style={styles.centerButtonsContainer}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon name="export" size={20} />
                            <Button
                                title="ENDRE NAVN ELLER ADRESSE"
                                color="black"
                                onPress={() =>
                                    Linking.openURL(
                                        "https://brukerprofil.difi.no/minprofil/?goto=https://sok.samordnaopptak.no/"
                                    )
                                }
                            ></Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>



    )
}

const styles = StyleSheet.create({
    centerButtonsContainer: {
        width: "100%",
        height: "50%",

    },

    linksContainer:{
        left: 20,
        marginTop: 20,

    },

    userInfoContainer: {
      width: "100%",
      borderBottomColor: "gray",
      borderBottomWidth: 1,

    },

    profileIcon: {
      width: 200,
      height: 200,

    },

    iconContainer:{
        left: 10,
        marginTop: 15,
        marginBottom: 15,
    },

    textContainer:{
        left: 15,
    },

    centerContainer: {
      alignItems: "center",
      backgroundColor: "lavender",
    },
  });
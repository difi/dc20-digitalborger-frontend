import * as React from 'react';
import {Alert, Button, Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Component, useEffect, useState} from "react";



const serviceImage = [
    {name:"Digital_Post", uri: "https://seeklogo.com/images/M/mail-icon-logo-28FE0635D0-seeklogo.com.png"  }
];
const userImages = [
    { name: "Profile", uri: "https://www.freeiconspng.com/uploads/profile-icon-28.png" }
];
/*<Image source={{uri: serviceImage[0].uri}} style={{width: "100%", height: "100%"}} resizeMode={"cover" +
                    ""}/>*/
export default function Profile() {

    const[number, setNumber] = useState('mobilnummer');
    const[address, setAddress] = useState('Adresse');
    const[sted, setSted] = useState('Sted');
    const[email, setEmail] = useState('E-post')


    const numberPressButton =() => {
        Alert.alert(" endra");
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#87CEEB" }}>
            <View style = {{padding: 5, alignItems: 'center', flexDirection: "row"}}>
                <Text style = {{textTransform: "uppercase", fontSize: 13, fontWeight: "bold"}}>Person-og kontaktinformasjon</Text>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL("https://www.digipost.no/")}>
                    <Image source={{uri: serviceImage[0].uri }} style={styles.images} />
                    <Text style={{fontSize: 9,
                        fontWeight: "bold",
                        color: "gray" }}> DigiPost</Text>
                </TouchableOpacity>
            </View>
            <View style = {{padding: 5, alignItems: 'center'}}>
                <Image source={{uri: userImages[0].uri}} style={styles.profileIcon}/>
                <View style={styles.userInfoContainer}  >
                    <Text style= {styles.textStyle}> Navn Etternavn </Text>
                    <Text style={styles.textStyle}> 03.05.1992 </Text>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.textStyle}>{address}</Text>
                    <Text style={styles.textStyle}>{sted}</Text>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style = {styles.textStyle}> {email}</Text>
                    <Text style = {styles.textStyle}>{number} </Text>
                </View>
                <View style = {{padding: 10, alignItems: 'center', justifyContent: "space-between"}}>
                    <Button title="Endre adresse" color="#66CDAA" onPress={() => Linking.openURL("https://www.skatteetaten.no/person/folkeregister/flytte/?utm_source=bing&utm_medium=cpc&utm_campaign=Folkeregister%20-%20Flytting%20og%20adresse%20-%20NY20&utm_term=adresseendring&utm_content=Adresseendring")}>
                    </Button>
                    <Button title="Endre E-pot og mobilnummer" color="#66CDAA" onPress={() => numberPressButton()} />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 80,
        height: 80,
        width: 80,
        borderRadius: 5,
        padding: 20,
        backgroundColor: "white"
    },
    userInfoContainer:{
        height: 50,
        width: 200,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        justifyContent: "space-between",
    },
    images: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
    profileIcon: {
        width: 110,
        height: 110,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "gray",
    }
});

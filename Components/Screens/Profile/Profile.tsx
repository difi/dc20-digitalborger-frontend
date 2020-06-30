import * as React from 'react';
import {Alert, Button, Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Component, useEffect, useState} from "react";
import {ButtonGroup, CheckBox, Header} from "react-native-elements";


const serviceImage = [
    {
        name:"Digital_Post", uri: "https://seeklogo.com/images/M/mail-icon-logo-28FE0635D0-seeklogo.com.png",
        name2: "email-icon", uri2: "https://st2.depositphotos.com/2234823/8318/i/950/depositphotos_83181408-stock-photo-inbox-envelope-mail-icon-illustration.jpg"

    }
];
const userImages = [
    { name: "Profile", uri: "https://www.freeiconspng.com/uploads/profile-icon-28.png" }
];

const persons =
    {
        name: "Linda Hansen",
        birth: "01.01.2002",
        address: "Dalen 24",
        streetAddress: "Leikanger 6863",
        email: "Linda.Hansen@gmail.com",
        number: "12345678"


    }

const digiPostBrev = {

    letter: "Digipost",
    amount: "2"
}


export default function Profile() {

    return (
        <View style={styles.container }>
            <Header backgroundColor="white" centerComponent={{text: "Profil"}}/>

            <View style = {styles.upperScreen}>
                <Text style = {{textTransform: "uppercase", fontSize: 12, fontWeight: "bold"}}>Person-og kontaktinformasjon</Text>
                <TouchableOpacity style={styles.upperButtonContainer} onPress={() => Linking.openURL("https://www.digipost.no/")}>
                    <Image source={{uri: serviceImage[0].uri }} style={styles.images} />
                    <Text style={{fontSize: 9,
                        fontWeight: "bold",
                        color: "red" , alignItems: "center"}}> {digiPostBrev.letter}{"("}{(digiPostBrev.amount)}{")"}</Text>
                </TouchableOpacity>
            </View>
            <View style = {{padding: 5, alignItems: 'center', justifyContent: "space-between"}}>
                <Image source={{uri: userImages[0].uri}} style={styles.profileIcon}/>
                <View style={styles.userInfoContainer}  >
                    <Text style= {styles.textStyle}> {persons.name} </Text>
                    <Text style={styles.textStyleSmall}> {persons.birth} </Text>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.textStyle}>{persons.address}</Text>
                    <Text style={styles.textStyleSmall}>{persons.streetAddress}</Text>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style = {styles.textStyle}> {persons.email}</Text>
                    <Text style = {styles.textStyleSmall}>{persons.number} </Text>
                </View>
                <View style = {styles.centerButtonsContainer}>

                    <Button title="Endre adresse" color="#008b8b" onPress={() => Linking.openURL("https://www.skatteetaten.no/person/folkeregister/flytte/?utm_source=bing&utm_medium=cpc&utm_campaign=Folkeregister%20-%20Flytting%20og%20adresse%20-%20NY20&utm_term=adresseendring&utm_content=Adresseendring")}>
                    </Button>

                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#87CEEB"
    },
    upperScreen:{
        height: '20%',
        width: '100%',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
        padding: '5%'


    },
    upperButtonContainer: {
        margin: 10,
        height: 50,
        width: 50,
        borderRadius: 5,
    },
    centerButtonsContainer: {
        width: '50%',
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: "stretch",
        justifyContent: "space-around",
        padding: "5%"


    },
    userInfoContainer:{
        height: 50,
        width: 200,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        alignItems: 'center',

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
        justifyContent: "space-around",
    },
    textStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "gray",
    },
    textStyleSmall: {
        fontSize: 12,
        fontWeight: "bold",
        color: "gray",
    }
});

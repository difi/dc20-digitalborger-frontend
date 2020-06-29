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
    const [edit, setEdit] = useState({isEditable: false});
    const[number, setNumber] = useState(' ');
    const[address, setAddress] = useState('Adresse');
    const[sted, setSted] = useState('Sted');
    const[email, setEmail] = useState('E-post')
    function changeInput(enteredText){
        setEdit(enteredText);
    }
    const adressPressButton = event => {
        console.log(address)
        const a = event.target.value({address});
    }
    const editText = (enteredText) =>{
        setNumber(enteredText);
    }
    const numberPressButton = () => {
        Alert.alert("Nummeret er endra");
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#87CEEB" }}>
            <View style = {{padding: 10, alignItems: 'center', flexDirection: "row", justifyContent: "space-between"}}>
                <Text style = {{textTransform: "uppercase", fontSize: 13, fontWeight: "bold"}}>Person-og kontaktinformasjon</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL("https://www.digipost.no/")}>
                    <Text> DigiPost</Text>
                </TouchableOpacity>
            </View>
            <View style = {{padding: 50, alignItems: 'center'}}>
                <View style={styles.userInfoContainer}  >
                    <Text style= {{fontSize: 15, fontWeight: "bold", color: "gray"}}> Navn Etternavn </Text>
                    <Text style={{fontSize: 12, color: "gray"}}> 03.05.1992 </Text>
                </View>
                <View style={styles.userInfoContainer}>
                    <TextInput placeholder="Adresse" onChangeText={() => changeInput} style = {{fontSize: 15, fontWeight: "bold", borderColor: "black"}}></TextInput>
                    <TextInput placeholder="Sted" onChangeText={() => editText} style={{fontSize: 12, color: "gray"}}/>
                </View>
                <View style={styles.userInfoContainer}>
                    <TextInput placeholder="E-post" onChangeText={() => editText}  style = {{fontSize: 15, fontWeight: "bold"}} />
                    <TextInput
                        placeholder= "mobilnummer"
                        style = {{fontSize: 15, fontWeight: "bold"}}
                        onChangeText={editText}
                    >
                    </TextInput>
                </View>
                <View style = {{padding: 10, alignItems: 'center', justifyContent: "space-between"}}>
                    <Button title="Endre E-post eller mobil" color="#66CDAA" onPress={() => numberPressButton }>
                    </Button>
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
        margin: 50,
        height: 50,
        width: 110,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "white"
    },
    userInfoContainer:{
        height: 50,
        width: 200,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        justifyContent: "space-between",
    },
});

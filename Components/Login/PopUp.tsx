import {Alert, Dimensions, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import * as React from 'react';
import {useEffect, useState} from "react";
import * as WebBrowser from "expo-web-browser";

const {width, height} = Dimensions.get("window");

interface PopUpProps {
    pressed: boolean;
    parentCallback: any;
}

export default function PopUp({pressed, parentCallback}: PopUpProps){
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(pressed);
    },[pressed]);

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={[styles.centeredView, {justifyContent: "center", backgroundColor: 'rgba(100,100,100, 0.2)',}]}>
                <View style={styles.modalView}>
                    <View style={{flex: 2}}>
                        <Text style={{fontWeight: "bold", fontSize: 18, marginBottom: 30}}>Registrere MinID bruker</Text>
                        <Text style={{marginBottom: 5}}>For å kunne registrere en bruker hos oss trenger du et PIN-kode brev. Dette mottar du i posten, eller du kan bestille.</Text>
                        <TouchableOpacity style={{marginBottom: 20}} onPress={
                            () => {WebBrowser.openBrowserAsync("https://brukerprofil.difi.no/orderpincode/")}
                        }>
                            <Text style={{color: "#2196F3"}}>Bestill PIN-kode brev</Text>
                        </TouchableOpacity>
                        <Text style={{marginBottom: 20}}>Dersom du allerede har motatt brevet følger du denne linken og trykker på "Registrer Bruker". Du følger videre stegene opgitt på siden.</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "flex-end", flexDirection: "row"}}>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3", height: 38, flex: 1, marginRight: 40}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                parentCallback(false);
                            }}
                        >
                            <Text style={styles.textStyle}>Lukk</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3",flex: 1}}
                            onPress={() => {
                                WebBrowser.openBrowserAsync("https://idporten.difi.no/opensso/UI/Login?realm=/norge.no&spEntityID=oidc.difi.no&service=IDPortenLevel3List&goto=http://idporten.difi.no/opensso/SSORedirect/metaAlias/norge.no/idp4?ReqID%3D_ef001a27768f3f622d86044d6e236e0a%26index%3Dnull%26acsURL%3Dhttps://oidc.difi.no:443/idporten-oidc-provider/assertionconsumer%26spEntityID%3Doidc.difi.no%26binding%3Durn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST")
                            }}
                        >
                            <Text style={styles.textStyle}>Registrer</Text>
                        </TouchableHighlight>
                    </View>
                </View>

             </View>
        </Modal>
    );
}
/*
<Text style={styles.modalText}>Hello World!</Text>
                <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                        parentCallback(false);
                    }}
                >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableHighlight>
 */

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
    modalView: {
        height: height / 2.3, width: width / 1.4, alignSelf: "center",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

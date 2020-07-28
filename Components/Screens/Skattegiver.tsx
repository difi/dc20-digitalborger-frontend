import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import {useEffect, useState} from "react";
import {retrieveData} from "../Storage";
import {getSkattInfo} from "../ServerCommunications/Services/SkatteetatenService";


const info = {
    intro: "Disse har hentet skattekortet ditt:",
    fetched: "Hentet:",

};

const Arbeidsgiver = [
    {
        company: "DOMSTOLENE I NORGE",
        date:  "12.04.2020",
    },
    {
        company: "DIGITALISERINGSDIREKTORATET",
        date:  "24.06.2020",
    },
    {
        company:  "SOGNDAL KOMMUNE",
        date: "18.08.2020",

}]

export default function Skattegiver() {

    const [employerData, setEmployer] = useState({Skatt: {inntekt: 0, beregnet: 0, trekk: 0}, Arbeidsgiver: [{company: "", date: ""}],})


    useEffect(() => {
        (async () => {
            const pid: number = await retrieveData("pid");
            let result = await getSkattInfo(pid);
            setEmployer(result);
        })();

    }, []);

    const formatDate = (date) => {


        let time = new Date(date).toLocaleDateString();
        let format = String(time).split('/')

        let day = format[1];
        let month = format[0];
        let year = format[2];


        return [day + '.' + month + '.' + year]

    }


    return (

        <View>
            <View style={styles.container}>
                <View style={styles.introText}>
                    <Text style={{ fontWeight: "bold", fontSize: 15}}>{info.intro}</Text>
                </View>

                {employerData.Arbeidsgiver.map((item, indexSkatt) => (
                    <View key={indexSkatt} style={styles.textContainer}>
                        <View style={styles.leftText}>
                            <Text style={{fontSize: 15}}>{item.company}</Text>
                        </View>
                        <View style={styles.rightText}>
                            <Text style={{fontSize: 15}}>{info.fetched}</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 15}}>{formatDate(item.date)}</Text>
                        </View>
                    </View>
                ))}


                <TouchableOpacity
                    containerStyle={styles.linkContainer}
                    onPress={() =>
                        WebBrowser.openBrowserAsync(
                            "https://skatt.skatteetaten.no/web/minskatteside/?innvalg=minearbeidsgivere#/minearbeidsgivere"
                        )
                    }
                >
                    <View style={styles.linkContainer}>
                        <Icon name="arrow-circle-right" size={15}></Icon>
                        <Text style={{ fontWeight: "bold",fontSize: 14}}> Detaljer om hvem som har hentet skattekorte ditt </Text>
                    </View>
                </TouchableOpacity>

            </View>

            </View>

    );
}



const styles = StyleSheet.create({

    container: {
        top: 10,
    },

    introText:{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 10,
    },

    textContainer:{
        flexDirection: "row",
        marginTop: 10,
        borderBottomColor: "#E1E1E1",
        borderBottomWidth: 1,
    },

    rightText:{
        alignItems: "flex-start",
        marginBottom: 10,
        right: 5,
    },

    leftText:{
        alignItems: "flex-start",
        flexDirection: "column",
        marginBottom: 10,
        flex: 1,
    },

    linkContainer:{
        flexDirection: "row",
        marginTop: 15,
    },

});
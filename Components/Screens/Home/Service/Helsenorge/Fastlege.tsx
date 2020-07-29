import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import {useEffect, useState} from "react";
import {retrieveData} from "../../../../Storage";
import {getDoctorData} from "../../../../ServerCommunications/Services/HelseNorgeService";


export default function Fastlege() {

    const [legeData, setLege] = useState(
        { name: "", office: "", phone: "" },
    );

    useEffect(() => {
        (async () => {
            const pid: number = await retrieveData("pid");
            let result = await getDoctorData(pid);
            setLege(result);
        })();

    }, []);



    return (
        <View>
            <View style={styles.row}>
                    <View style={styles.introContainer}>
                        <Text style={{ fontWeight: "bold", fontSize: 15}}>Din fastlege:</Text>
                    </View>
                     <View style={styles.contentContainer}>
                            <Text style={{fontSize: 15}}>{legeData.name}</Text>
                    </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            WebBrowser.openBrowserAsync(
                                "https://tjenester.helsenorge.no/bytte-fastlege?"
                            )
                        }
                    >
                        <Icon name="pen" size={15} ></Icon>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.introContainer}>
                    <Text style={{ fontWeight: "bold", fontSize: 15}}>Ditt legekontor:</Text>
                    </View>
                    <View style={styles.contentContainer}>
                            <Text style={{fontSize: 15}}>{legeData.office}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            onPress={() =>
                                WebBrowser.openBrowserAsync(
                                    "https://tjenester.helsenorge.no/bytte-fastlege?"
                                )
                            }
                        >
                            <Icon name="pen" size={15} ></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
             </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginBottom: 20,
        top: 10,
    },
    introContainer:{
        flex: 2,
    },
    contentContainer: {
        flex: 2,
        height: "100%",
        width: "100%",
        right: 15,
    },
    iconContainer:{
        bottom: 5,
        marginTop: 10,
    },
});

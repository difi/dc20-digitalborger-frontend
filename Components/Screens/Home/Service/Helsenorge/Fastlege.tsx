import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
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
                        <Text style={{ fontWeight: "bold", fontSize: 13}}>Din fastlege:</Text>
                    </View>
                     <View style={styles.contentContainer}>
                            <Text style={{fontSize: 13}}>{legeData.name}</Text>
                    </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            WebBrowser.openBrowserAsync(
                                "https://tjenester.helsenorge.no/bytte-fastlege?"
                            )
                        }
                    >
                        <Icon name="pen" size={20} ></Icon>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.introContainer}>
                    <Text style={{ fontWeight: "bold", fontSize: 13}}>Ditt legekontor:</Text>
                    </View>
                    <View style={styles.contentContainer}>
                            <Text style={{fontSize: 13}}>{legeData.office}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            onPress={() =>
                                WebBrowser.openBrowserAsync(
                                    "https://tjenester.helsenorge.no/bytte-fastlege?"
                                )
                            }
                        >
                            <Icon name="pen" size={20} ></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            <TouchableOpacity
                containerStyle={styles.linkContainer}
                onPress={() =>
                    WebBrowser.openBrowserAsync(
                        "https://tjenester.helsenorge.no/Fastlegen"
                    )
                }
            >
                <View style={styles.linkContainer}>
                    <Text style={{ fontWeight: "bold",fontSize: 15}}> Mer om din fastlege </Text>
                    <Icon name="long-arrow-alt-right" size={15}></Icon>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginBottom: 20,
        top: 10,
        borderBottomWidth: 1,
        borderColor: "#E1E1E1",
    },
    introContainer:{
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 10,
    },
    contentContainer: {
        flex: 1,
        alignSelf: "flex-start",
        right: 8,
        top: 5,
    },
    iconContainer:{
        bottom: 15,
        marginTop: 10,
    },
    linkContainer:{
        flexDirection: "row",
        marginTop: 12,
        right: 1,
    },
});

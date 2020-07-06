import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Image, Header } from "react-native-elements";
import CountDown from "react-native-countdown-component";
import { ScrollView } from "react-native-gesture-handler";
import PushNotification from "./PushNotification";

// data -> Skal byttes ut med data fra database
var deadline = new Date();
var deadline2 = new Date();
var deadline3 = new Date();
deadline2.setDate(deadline2.getDate() + 10);
deadline.setDate(deadline.getDate() + 1);
deadline3.setDate(deadline3.getDate() + 15);

const events = [
    {
        name: "Søk høyere utdanning",
        logo: "https://www.vigo.no/vigo/html/img/vigo-logo.png",
        description: "23:00:21",
        date: deadline,
    },
    {
        name: "Søk om støtte fra lånekassen",
        logo:
            "https://pbs.twimg.com/profile_images/1237666131407785984/rVBZZwGk_400x400.jpg",
        date: deadline2,
        description: "20 dager",
    },
    {
        name: "Corona vaksine",
        logo:
            "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
        description: "10 dager",
        date: deadline3,
    },
];
// Slutt data

export default function Hourglass() {
    var date = new Date();

    function getTimeLeft(deadline: Date) {
        return (deadline.getTime() - date.getTime()) / 1000;
    }

    function getColor(deadline: Date) {
        if (getTimeLeft(deadline) <= 86400) {
            return "red";
        }
        return "black";
    }

    function getFormat(deadline: Date) {
        if (getTimeLeft(deadline) <= 86400) {
            return ["H", "M", "S"];
        }
        return ["D", "H"];
    }

    return (
        <View>
            <Header
                backgroundColor="white"
                centerComponent={{
                    text: "Varslinger",
                    style: { fontWeight: "bold", backgroundColor: "white", fontSize: 16 },
                }}
            />
            <View>
                <Image
                    source={{
                        uri:
                            "https://cdn.shopify.com/s/files/1/0157/9972/files/EmilyLey_SoftBlueGradient_1280x2272.png?v=1572546664",
                    }}
                    style={styles.backgroundImage}
                >
                    <ScrollView>
                        {events.map((event, index) => (
                            <View>
                                <Card
                                    title={event.name}
                                    containerStyle={styles.card}
                                    titleStyle={styles.cardTitle}
                                    key={index}
                                >
                                    <View style={styles.cardContent}>
                                        <View style={styles.logoContainer}>
                                            <Image
                                                source={{ uri: event.logo }}
                                                style={styles.logo}
                                            ></Image>
                                        </View>
                                        <View style={styles.countDownContainer}>
                                            <CountDown
                                                digitStyle={{ backgroundColor: "white" }}
                                                digitTxtStyle={{ color: getColor(event.date) }}
                                                until={getTimeLeft(event.date)}
                                                size={26}
                                                timeToShow={getFormat(event.date)}
                                                timeLabels={{
                                                    d: "Dager",
                                                    h: "Timer",
                                                    m: "Min",
                                                    s: "Sek",
                                                }}
                                            />
                                        </View>
                                    </View>
                                </Card>
                                <PushNotification
                                title={event.name}
                                date={event.date}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </Image>
            </View>   
        </View>
    );
}

const styles = StyleSheet.create({
    cardContent: {
        flexDirection: "row",
    },
    logoContainer: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 10,
    },
    logo: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
    countDownContainer: {
        flex: 2,
        marginRight: 65,
    },
    card: {
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 20,
    },
    backgroundImage: {
        height: "100%",
        width: "100%",
    },
});

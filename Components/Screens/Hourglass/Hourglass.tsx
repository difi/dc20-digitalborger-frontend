import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { Card } from "react-native-elements";
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
    icon_color: "#64D2FF",
  },
  {
    name: "Søk om støtte fra lånekassen",
    logo:
      "https://pbs.twimg.com/profile_images/1237666131407785984/rVBZZwGk_400x400.jpg",
    date: deadline2,
    icon_color: "#BF5AF2",
  },
  {
    name: "Corona vaksine",
    logo:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/77/f0/d7/77f0d76b-f164-5569-6ce0-49800468c8fe/source/256x256bb.jpg",
    description: "10 dager",
    date: deadline3,
    icon_color: "#30D158",
  },
];
// Slutt data

export default function Hourglass() {
  var date = new Date();

  function getTimeLeft(deadline: Date) {
    return (deadline.getTime() - date.getTime()) / 1000;
  }

  function getFormat(deadline: Date) {
    if (getTimeLeft(deadline) <= 86400) {
      return ["H", "M", "S"];
    }
    return ["D", "H"];
  }

  return (
    <SafeAreaView>
      <Text style={styles.heading}>Nedtellinger</Text>
      <ScrollView style={{}}>
        {events.map((event, index) => (
          <View key={index}>
            <Card
              containerStyle={{
                backgroundColor: event.icon_color,
                borderWidth: 0,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.3,
                shadowRadius: 1.8,

                elevation: 4,
              }}
            >
              <View style={styles.countDownContainer}>
                <CountDown
                  until={getTimeLeft(event.date)}
                  size={40}
                  timeToShow={getFormat(event.date)}
                  timeLabelStyle={{
                    fontSize: 15,
                    fontFamily: "Helvetica",
                  }}
                  digitStyle={{
                    backgroundColor: event.icon_color,
                  }}
                  digitTxtStyle={{
                    color: "white",
                    fontFamily: "Helvetica",
                    fontWeight: "normal",
                  }}
                  timeLabels={{
                    d: "Dager",
                    h: "Timer",
                    m: "Min",
                    s: "Sek",
                  }}
                />
              </View>
            </Card>
            <View style={styles.titleContainer}>
              <Text
                style={[
                  styles.title,
                  { color: index === 0 ? "rgb(255, 102, 102)" : "black" },
                ]}
              >
                {event.name}
              </Text>
              <Text style={styles.date}>25.03.2020</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  cardContent: {
    flexDirection: "row",
    borderBottomColor: "#E1E1E1",
    borderBottomWidth: 1,
  },

  countDownContainer: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Helvetica",
    fontSize: 20,
    marginLeft: 10,
    color: "red",
    marginTop: 7,
  },
  titleContainer: {
    backgroundColor: "white",
    height: 60,
    width: "93%",
    alignSelf: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.8,

    elevation: 4,
  },
  date: {
    fontFamily: "Helvetica",
    color: "grey",
    paddingLeft: 12,
    paddingTop: 5,
  },
});

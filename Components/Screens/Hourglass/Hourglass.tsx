import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Image, Header, Card } from "react-native-elements";
import CountDown from "react-native-countdown-component";
import { ScrollView } from "react-native-gesture-handler";
import PushNotification from "./PushNotification";
import { backgroundColor } from "@shopify/restyle";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Animated from "react-native-reanimated";
import { shadow } from "react-native-paper";

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

  function getColor(deadline: Date) {
    if (getTimeLeft(deadline) <= 86400) {
      return "red";
    }
    return "white";
  }

  function sendPush24hrsLeft(title: String, date: Date) {
    if (getTimeLeft(date) <= 24 * 60 * 60) {
      return <PushNotification title={title} date={date} />;
    }
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
                shadowRadius: 5,
                //shadowColor: "grey",
                borderWidth: 0,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
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
                    color: getColor(event.date),
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
              <Text style={styles.title}>{event.name}</Text>
              <Text style={styles.date}>25.03.2020</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}> Nedtelling </Text>
        <ScrollView style={{ height: "100%" }}>
          {events.map((event, index) => (
            <View key={index} style={{}}>
              <View style={styles.title}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  {event.name}
                </Text>

                <View style={styles.countDownContainer}>
                  <CountDown
                    until={getTimeLeft(event.date)}
                    size={30}
                    timeToShow={getFormat(event.date)}
                    timeLabelStyle={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 10,
                      fontFamily: "Helvetica",
                    }}
                    digitStyle={{
                      //backgroundColor: "#30D158",
                      borderWidth: 2,
                      borderColor: "#E1E1E1",
                      //fontFamily: "Helvetica",
                      //fontWeight: "bold",
                      borderRadius: 50,
                    }}
                    digitTxtStyle={{
                      color: getColor(event.date),
                      fontFamily: "Helvetica",
                    }}
                    timeLabels={{
                      d: "Dager",
                      h: "Timer",
                      m: "Min",
                      s: "Sek",
                    }}
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );

  /*return (
    <SafeAreaView>
      <Text style={styles.heading}>Nedtellinger</Text>
      <View>
        <CountdownCircleTimer
          isPlaying
          duration={120}
          colors={[
            ["#004777", 0.4],
            ["#F7B801", 0.4],
            ["#A30000", 0.2],
          ]}
          size={150}
          strokeWidth={10}
          initialRemainingTime={60}
        >
          {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{ color: "blue" }}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
      </View>
    </SafeAreaView>
  );*/
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
    //backgroundColor: "#30D158",
    borderBottomColor: "#E1E1E1",
    borderBottomWidth: 1,
    //borderRadius: 20,
  },
  /*logoContainer: {
    width: 50,
    height: 50,
    marginVertical: 17,
    left: 15,
  },
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },*/
  /*countDownContainer: {
    flex: 2,
    marginRight: 65,
    marginTop: 10,
    marginVertical: 20,
  },*/
  countDownContainer: {
    //backgroundColor: "lavender",
    //alignSelf: "flex-start",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Helvetica",
    fontSize: 20,
    marginLeft: 10,
    //color: "white",
    marginTop: 7,
  },
  titleContainer: {
    backgroundColor: "white",
    height: 60,
    width: "93%",
    alignSelf: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  date: {
    fontFamily: "Helvetica",
    color: "grey",
    paddingLeft: 12,
    paddingTop: 5,
  },
});

//{sendPush24hrsLeft(event.name, event.date)}

/* <View style={styles.cardContent}>
                  <View key={index} style={styles.logoContainer}>
                    <Image
                      source={{ uri: event.logo }}
                      style={styles.logo}
                    ></Image>
                  </View>
                </View>*/

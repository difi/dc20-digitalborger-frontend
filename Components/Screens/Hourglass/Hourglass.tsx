import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import CountDown from "react-native-countdown-component";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { getCountdowns } from "../../ServerCommunications/Services/Countdowns";

function getTimeLeft(data: Date) {
  let date = new Date();
  let deadline = new Date(data);
  return (deadline.getTime() - date.getTime()) / 1000;
}

function getFormat(deadline: Date) {
  if (getTimeLeft(deadline) <= 86400) {
    return ["H", "M", "S"];
  }
  return ["D", "H"];
}

function getTimeString(deadline: Date) {
  let date = new Date(deadline);
  return date.toLocaleDateString("en-GB");
}

export default function Hourglass() {
  const [events, setData] = useState(Array);

  useEffect(() => {
    const getData = async () => {
      const data = await getCountdowns();
      setData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.heading}>Nedtellinger</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {events.map((event, index) => (
          <View key={index}>
            <Card
              containerStyle={{
                backgroundColor: "#EE8970",
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
                  until={getTimeLeft(event.fristdato)}
                  size={40}
                  timeToShow={getFormat(event.fristdato)}
                  timeLabelStyle={{
                    fontSize: 15,
                  }}
                  digitStyle={{
                    backgroundColor: "#EE8970",
                  }}
                  digitTxtStyle={{
                    color: "white",
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
                  {
                    color:
                      getTimeLeft(event.fristnavn) < 24 * 60 * 60
                        ? "rgb(255, 102, 102)"
                        : "black",
                  },
                ]}
              >
                {event.fristnavn}
              </Text>
              <Text style={styles.date}>{getTimeString(event.fristdato)}</Text>
            </View>
          </View>
        ))}
        <View style={{ height: 200 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
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
    color: "grey",
    paddingLeft: 12,
    paddingTop: 5,
  },
});

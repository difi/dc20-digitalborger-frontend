import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image, Header } from "react-native-elements";
import CountDown from "react-native-countdown-component";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [data, setData] = useState(Array);
  const [uri, setUri] = useState(Array);

  useEffect(() => {
    (async () => {
      let result = await axios.get(
        "http://feat01-drupal8.dmz.local/dib/jsonapi/node/frist?include=field_tjeneste&sort=field_dato"
      );
      setData(result.data.data);
      //setUri(result.data.included);
      console.log("hallo", result.data.included[0].attributes.field_logo.uri); //uri
      //console.log(result.data.data[0].attributes.field_dato);
      //console.log(result.data.data[0].attributes.title) //tittel og dato
    })();
  }, []);

  /* function getApi()  {
      fetch("http://feat01-drupal8.dmz.local/dib/jsonapi/node/frist?include=field_tjeneste&sort=field_dato")
      .then((result) => console.log(result))
    }*/

  var date = new Date();

  function getTimeLeft(deadline: Date) {
    return (deadline.getTime() - date.getTime()) / 1000;
  }

  function getColor(deadline: Date) {
    if (getTimeLeft(deadline) <= 86400) {
      return "red";
    }
    return "#93E6F3";
  }

  function getFormat(deadline: Date) {
    if (getTimeLeft(deadline) <= 86400) {
      return ["H", "M", "S"];
    }
    return ["D", "H"];
  }
  /*return(
    <View>
      {data.map((event, index) => (
        <View>
          <Text>{event.attributes.field_dato}</Text>
          <Text>{event.attributes.title}</Text>
          {uri.map((u, ind) => (
            <Text>{u.attributes.field_logo.uri}</Text>
          ))}
        </View>
      ))}
    </View>
  )
}*/

  return (
    <View>
      <Header
        backgroundColor="#93E6F3"
        centerComponent={{
          text: "Dine frister",
          style: {
            fontWeight: "bold",
            backgroundColor: "#93E6F3",
            fontSize: 16,
          },
        }}
      />
      <View>
        <ScrollView>
          {data.map((event, index) => (
            <View style={styles.title} key={index}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {event.attributes.title}
              </Text>

              <View style={styles.cardContent}>
                  <View key={index} style={styles.logoContainer}>
                  <Image
                    //source={{ uri: uri.attributes.field_logo.uri }}
                    style={styles.logo}
                  ></Image>
                  </View>
                

                <View style={styles.countDownContainer}>
                  <CountDown
                    until={getTimeLeft(new Date(event.attributes.field_dato))}
                    size={25}
                    timeToShow={getFormat(new Date(event.attributes.field_dato))}
                    timeLabelStyle={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 10,
                    }}
                    digitStyle={{
                      backgroundColor: "#FFF",
                      borderWidth: 2,
                      borderColor: "#E1E1E1",
                    }}
                    digitTxtStyle={{ color: getColor(new Date(event.attributes.field_dato)) }}
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
    </View>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    backgroundColor: "#F3F3F3",
    borderBottomColor: "#E1E1E1",
    borderBottomWidth: 1,
    borderRadius: 20,
  },
  logoContainer: {
    width: 50,
    height: 50,
    marginVertical: 17,
    left: 15,
  },
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  countDownContainer: {
    flex: 2,
    marginRight: 65,
    marginTop: 10,
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
    alignItems: "center",
    marginTop: 20,
  },
});

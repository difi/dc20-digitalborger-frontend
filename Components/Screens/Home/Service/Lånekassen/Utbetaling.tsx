import * as React from "react";
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as WebBrowser from "expo-web-browser";
import {useEffect, useState} from "react";
import {retrieveData} from "../../../../Storage";
import {getPayoutData} from "../../../../ServerCommunications/Services/LaanekassenService";
import Button from "../assets/Button";

const Betalinger = {
    occurrence: "Utbetaling",
  }


export default function Utbetaling() {

  const [payout, setPayout] = useState([
    { date: "", occurrence: "null", sum: 0 },
  ]);


  useEffect(() => {
    (async () => {
      const pid: number = await retrieveData("pid");
      let result = await getPayoutData(pid);
      setPayout(result);
    })();
  }, []);


  const formatMonth = (month) => {

    switch (month) {
      case "May":
        return "Mai";
        break;
      case "Oct":
        return "Okt";
        break;
      case "Dec":
        return "Des";
        break;
      default:
        return month;
        break;

    }
  }

  const formatDate = (date) => {


    let time = new Date(date).toDateString();
    let format = String(time).split(' ')

    let month = format[1];
    let day = format[2];
    let year = format[3];



    return day + "." + formatMonth(month) + "." + year ;

  }

  return (
    <SafeAreaView>
      <View style={styles.titleHeader}>
        <Text style={styles.titleText}>Dato</Text>
        <Text style={styles.titleText}>Hendelse</Text>
        <Text style={styles.titleText}>Beløp</Text>
      </View>
      <ScrollView>
        {payout.slice(0, 6).map((item, index) => (
          <View key={index} style={styles.listItems}>
            <Text style={styles.ItemText}>{formatDate(item.date)}</Text>
            <Text style={styles.ItemText}>{Betalinger.occurrence}</Text>
            <Text style={styles.ItemText}>{item.sum + " kr"}</Text>
          </View>
        ))}
      </ScrollView>
      <View>
        <View style={styles.buttonContainer}>
          <Button label={"Til dine sider"} color={"#97469d"} onPress={() =>
              WebBrowser.openBrowserAsync(
                  "https://lanekassen.no/nb-NO/verktoy-og-frister/Frister-i-Lanekassen/utbetaling-av-utdanningsstotte/"
              )} textColor={"white"}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    width: "100%",
    backgroundColor: "#97469d",
    bottom: 10,
    flexShrink: 1,
  },
  titleText: {
    color: "white",
    fontSize: 16,
    flex: 1/3,
    textAlign: "center",
  },
  listItems: {
    flexShrink: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-around",
    marginBottom: 10,
    flex: 1,
  },
  ItemText: {
    fontSize: 15,
    marginBottom: 10,
    flex: 1/3,
    textAlign: "center",
  },
  buttonContainer:{
    margin: "10%",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
});

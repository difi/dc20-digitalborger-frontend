import * as React from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

const vehicles = [
  {
    name: "Personbil",
    icon: "car",
    code: "B",
    link:
      "https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-f%C3%B8rerkortet/personbil-b/trafikalt-grunnkurs",
  },
  {
    name: "Tohjulsmoped",
    icon: "motorbike",
    code: "AM146",
    link:
      "https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-førerkortet/tohjulsmoped-am146/trafikalt-grunnkurs",
  },
  {
    name: "3- og 4-hjulsmoped",
    icon: "star",
    code: "AM147",
    link:
      "https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-førerkortet/3-og-4-hjulsmoped-am147/trafikalt-grunnkurs",
  },
  {
    name: "Lett motorsykkel",
    icon: "motorbike",
    code: "A1",
    link:
      "https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-førerkortet/lett-motorsykkel-a1/trafikalt-grunnkurs",
  },
  {
    name: "Traktor",
    icon: "tractor",
    code: "T",
    link:
      "https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-f%C3%B8rerkortet/traktor-t/trafikalt-grunnkurs",
  },
  {
    name: "Snøscooter",
    icon: "star",
    code: "S",
    link:
      "https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-f%C3%B8rerkortet/snoscooter-s/trafikalt-grunnkurs",
  },
];

export default function VeienTilForerkortet() {
  function getBarLength(code: String) {
    if (code.length > 1) {
      return 50;
    } else {
      return 15;
    }
  }

  async function OpenWebPage(url: string) {
    let result = await WebBrowser.openBrowserAsync(url).catch(err => console.log(err));
  }

  const {width, height} = Dimensions.get("window");

  return (
      <View style={{height: 400,}}>
        <View style={{flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "center"}}>
          {vehicles.map((vehicle, index) => (

              <View key={index} style={styles.square}>
                <TouchableOpacity
                    key={index}
                    onPress={() => OpenWebPage(vehicle.link)}
                    containerStyle={{flex: 1,}}
                >
                  <Text style={styles.title}>{vehicle.name}</Text>
                  <View style={styles.iconContainer}>
                    <Icon name={vehicle.icon} size={90} color="#444f55" />
                  </View>
                  <View
                    style={{
                      width: getBarLength(vehicle.code),
                      height: 2,
                      backgroundColor: "#444f55",
                      marginBottom: "1%",
                      alignSelf: "center",
                    }}
                    />
                  <Text style={styles.code}>{vehicle.code}</Text>
                  <View
                    style={{
                      width: getBarLength(vehicle.code),
                      height: 2,
                      backgroundColor: "#444f55",
                      marginTop: "1%",
                      alignSelf: "center",
                    }}
                    />
                </TouchableOpacity>
              </View>
          ))}
        </View>
      </View>
  );
}

/*
 {vehicles.map((vehicle, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => OpenWebPage(vehicle.link)}
          containerStyle={styles.square}
        >
          <Text style={styles.title}>{vehicle.name}</Text>
          <View style={styles.iconContainer}>
            <Icon name={vehicle.icon} size={90} color="#444f55" />
          </View>
          <View
            style={{
              width: getBarLength(vehicle.code),
              height: 2,
              backgroundColor: "#444f55",
              marginBottom: "1%",
              alignSelf: "center",
            }}
          ></View>
          <Text style={styles.code}>{vehicle.code}</Text>
          <View
            style={{
              width: getBarLength(vehicle.code),
              height: 2,
              backgroundColor: "#444f55",
              marginTop: "1%",
              alignSelf: "center",
            }}
          ></View>
        </TouchableOpacity>
      ))}
 */

const styles = StyleSheet.create({
  gridContainer: {
    width: "100%",
    height: 400,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  square: {
    width: "45%",
    height: "45%",
    borderColor: "#e6e6e6",
    borderWidth: 5,
    margin: "2.5%",
  },
  title: {
    margin: "5%",
    fontWeight: "bold",
    fontSize: 15,
    color: "#444f55",
    alignSelf: "center",
  },
  iconContainer: { alignSelf: "center" },
  code: {
    color: "#444f55",
    alignSelf: "center",
    fontWeight: "bold",
  },
});

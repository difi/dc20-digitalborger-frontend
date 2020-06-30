import * as React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Fontisto";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

const vehicles = [
  {
    name: "Traktor",
    icon: "tractor",
    code: "T",
    link:
      "https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-f%C3%B8rerkortet/traktor-t/trafikalt-grunnkurs",
  },
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
    name: "Snøscooter",
    icon: "star",
    code: "S",
    link:
      "https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-f%C3%B8rerkortet/snoscooter-s/trafikalt-grunnkurs",
  },
];

export default function Notification() {
  function getBarLength(code: String) {
    if (code.length > 1) {
      return 50;
    } else {
      return 15;
    }
  }

  async function OpenWebPage(url: string) {
    let result = await WebBrowser.openBrowserAsync(url);
  }

  return (
    <View
      style={{
        width: "100%",
        height: "50%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {vehicles.map((vehicle, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => OpenWebPage(vehicle.link)}
          containerStyle={{
            width: "45%",
            height: "45%",
            borderColor: "#e6e6e6",
            borderWidth: "5%",
            margin: "2,5%",
          }}
        >
          <Text
            style={{
              margin: "5%",
              fontWeight: "bold",
              fontSize: "20%",
              color: "#444f55",
              alignSelf: "center",
            }}
          >
            {vehicle.name}
          </Text>
          <View style={{ alignSelf: "center" }}>
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
          <Text
            style={{
              color: "#444f55",
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >
            {vehicle.code}
          </Text>
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
    </View>
  );
}


/* Snowmobile: https://imageog.flaticon.com/icons/png/512/624/624888.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF
    Car: https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/car-512.png*/
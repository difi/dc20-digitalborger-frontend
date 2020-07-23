import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getTrafficStations } from "../../../../ServerCommunications/Services/Politi";

export default function School() {
  const [stations, setStation] = useState(Array);
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      setStatus(status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location); //trenger egentlig ikke lagre location

      let result = await getTrafficStations(
        location.coords.longitude,
        location.coords.latitude,
        3
      );
      setStation(result);
    })();
  }, []);

  if (status == "granted") {
    return (
      <View>
        <View style={styles.title}>
          <Text style={styles.text}>Stasjon: </Text>
          <Text style={styles.text}>Distanse: </Text>
        </View>
        {stations.map((station, index) => (
          <View key={index} style={styles.container}>
            <Icon name="office-building" size={40}></Icon>
            <Text style={styles.name}>{station.Politistasjon}</Text>
            <Text style={styles.distance}>{station.Distanse + "km"}</Text>
          </View>
        ))}
      </View>
    );
  } else {
    return (
      <View>
        <Text>{errorMsg}</Text>
        <Text>
          For å se politistasjoner i ditt nærområde, skru på stedsposisjon i
          instillinger.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    width: 140,
    marginRight: 100,
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    flexDirection: "row",
  },
  text: {
    marginRight: 205,
    marginLeft: 5,
    fontWeight: "bold",
  },
});

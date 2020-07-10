import React, { useState, useLayoutEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

// PROBLEM: Rendrer ikke skolene før man lager koden :-(

export default function School() {
  const [data, setData] = useState(Array);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  let longitude = "";
  let latitude = "";

  useLayoutEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://feat01-drupal8.dmz.local/dib/school/" +
          longitude +
          "/" +
          latitude +
          "/5"
      );
      setData(result.data);
    };
    fetchData();
    console.log(data);
  }, []);

  useLayoutEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    longitude = location.coords.longitude;
    latitude = location.coords.latitude;
  }

  return (
    <View>
      {data.map((school, index) => (
        <View key={index} style={styles.container}>
          <Icon name="office-building" size="40"></Icon>
          <Text style={styles.name}>{school.Skolenavn}</Text>
          <Text style={styles.distance}>{school.Distanse + "km"}</Text>
          <TouchableOpacity
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "http://" + school.Webside
              )
            }
          >
            <Text>Gå til</Text>
            <View style={styles.icon}>
              <Icon name="arrow-right-circle-outline" size="20"></Icon>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
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
    marginRight: 40,
  },
  distance: {
    width: 40,
  },
  link: {
    flexDirection: "row",
    marginLeft: 60,
  },
  icon: {
    marginLeft: 10,
  },
});

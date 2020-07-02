import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as Location from "expo-location";

export default function GeoLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [render, setBoolean] = useState(true);
  let longitude = '';
  let latitude = '';

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let render = true;
      let location = await Location.getCurrentPositionAsync({});
      if (render) {
        setLocation(location);
      }
    })();
  }, [render]); //Only re-runs if render changes

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location)
    longitude = location.coords.longitude;
    latitude = location.coords.latitude;
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Text style={{ color: 'purple', fontSize: 20}}>
        {"Latitude: " + latitude}
      </Text>
  <Text style={{ color: 'purple', fontSize: 20}}>{"Longitude: " + longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    height: 130,
    width: '100%',
  },
});

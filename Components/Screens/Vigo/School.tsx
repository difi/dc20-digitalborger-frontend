import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FlatList } from "react-native-gesture-handler";

const schools = [
  { name: "Sogndal Vgs", gpa: 4.5, url: "https://www.sogndal.vgs.no" },
  {
    name: "Voss Vgs",
    gpa: "5.5",
    url: "https://www.hordaland.no/vossvgs",
  },
];

export default function School() {
  const [data, setData] = useState({ schools: [] });

  useEffect( () => {
    fetch("http://feat01-drupal8.dmz.local/dib/school/0/0/5", {
      method: "GET"
    })
      .then(item => console.log(item))
  })

  return(
    <View>
      <Text>hei</Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "azure",
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    width: 125,
    marginRight: 40,
  },
  gpa: {
    width: 30,
  },
  link: {
    flexDirection: "row",
    marginLeft: 90,
  },
  icon: {
    marginLeft: 10,
  },
});


/*
return (
    <View style={styles.container}>
      <Icon name="office-building" size="40"></Icon>
      <Text style={styles.name}>{"Voss Gymnas"}</Text>
      <Text style={styles.gpa}>{"5.5"}</Text>
      <TouchableOpacity style={styles.link}>
        <Text>Gå til</Text>
        <View style={styles.icon}>
          <Icon name="arrow-right-circle-outline" size="20"></Icon>
        </View>
      </TouchableOpacity>
    </View>
  ); */
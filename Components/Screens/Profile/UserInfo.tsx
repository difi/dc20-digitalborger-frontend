import * as React from "react";
import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const uri = [
    {
      epostIcon:
        "https://seeklogo.com/images/M/mail-icon-logo-28FE0635D0-seeklogo.com.png",
      userIcon: "https://www.freeiconspng.com/uploads/profile-icon-28.png",
    },
  ];
  
  const persons = {
    name: "Linda Hansen",
    birth: "01.01.2002",
    address: "Dalen 24",
    streetAddress: "Leikanger 6863",
    email: "Linda.Hansen@gmail.com",
    number: "12345678",
  };


  // Slutt data 

export default function UserInfo() {
    return (
        <View style={styles.centerContainer}>
        <Image source={{ uri: uri[0].userIcon }} style={styles.profileIcon} />
        <View style={styles.userInfoContainer}>
          <Text style={styles.textStyle}> {persons.name} </Text>
          <Text style={styles.textStyleSmall}> {persons.birth} </Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.textStyle}>{persons.address}</Text>
          <Text style={styles.textStyleSmall}>{persons.streetAddress}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.textStyle}> {persons.email}</Text>
          <Text style={styles.textStyleSmall}>{persons.number} </Text>
        </View>
        <View style={styles.centerButtonsContainer}>
          <Button
            title="Endre adresse"
            color="#008b8b"
            onPress={() =>
              Linking.openURL(
                "https://www.skatteetaten.no/person/folkeregister/flytte/?utm_source=bing&utm_medium=cpc&utm_campaign=Folkeregister%20-%20Flytting%20og%20adresse%20-%20NY20&utm_term=adresseendring&utm_content=Adresseendring"
              )
            }
          ></Button>
        </View>
      </View>

    )
}

const styles = StyleSheet.create({
    centerButtonsContainer: {
      width: "50%",
      borderRadius: 5,
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "space-around",
      padding: "5%",
      backgroundColor: "gray",
    },
    userInfoContainer: {
      height: 50,
      width: 200,
      borderBottomColor: "gray",
      borderBottomWidth: 1,
      alignItems: "center",
      backgroundColor: "yellow",
    },
    profileIcon: {
      width: 110,
      height: 110,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "space-around",
    },
    textStyle: {
      fontSize: 15,
      fontWeight: "bold",
      color: "gray",
      backgroundColor: "blue",
    },
    textStyleSmall: {
      fontSize: 12,
      fontWeight: "bold",
      color: "gray",
      backgroundColor: "red",
    },
    title: {
      textTransform: "uppercase",
      fontSize: 12,
      fontWeight: "bold",
      backgroundColor: "orange",
    },
    centerContainer: {
      padding: 5,
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "lavender",
    },
  });
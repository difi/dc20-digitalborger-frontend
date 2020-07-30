import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import NotificationBar from "./NotificationBar";
import { Text } from "react-native-elements";
import { retrieveData } from "../../Storage";
import { updateBagde } from "../../ServerCommunications/Services/PushNotifications";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useState, useEffect } from "react";

// data -> Skal byttes ut med data fra database
var deadline = new Date();
var deadline2 = new Date();
var deadline3 = new Date();
deadline2.setDate(deadline2.getDate() + 10);
deadline.setDate(deadline.getDate() + 1);
deadline3.setDate(deadline3.getDate() + 15);

const events = [
  {
    service: "Vigo",
    description: "Fristen for å søke videregående skole er 25.05.2020",
    received: "25 minutter siden",
    icon: "mail-with-circle",
    icon_color: "#F7D590",
  },
  {
    service: "Lånekassen",
    description:
      "Lånekassen minner om at fristen for å søke støtte er 25.03.2020",
    received: "Mandag, 17:35",
    icon: "mail-with-circle",
    icon_color: "#AED5F1",
  },
  {
    service: "Helse Norge",
    description:
      "Helsenorge ber alle holde seg hjemme da smitten har bredt seg til din by. For mer informasjon sjekk ut våre nettsider.",
    received: "Mars, 18 2020",
    icon: "info-with-circle",
    icon_color: "#EE8970",
  },
];
// Slutt data

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    //alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  const pid: any = await retrieveData("pid").catch((err) => console.log(err));
  return token;
}

//TODO: Add Init component for checking whether user has valid token or not

export default function Notification() {
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    const updateBagdeCount = async () => {
      const pid: any = await retrieveData("pid").catch((err) =>
        console.log(err)
      );
      const data = await updateBagde(expoPushToken);
    };
    {
    }
    Notifications.setBadgeCountAsync(0);
    updateBagdeCount();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Varslinger</Text>
      <ScrollView>
        {events.map((event, index) => (
          <NotificationBar
            key={index}
            logo={{
              uri: event.logo,
            }}
            description={event.description}
            service={event.service}
            received={event.received}
            icon={event.icon}
            icon_color={event.icon_color}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
    padding: 20,
  },
});

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Components/Login/Login";
import ScreenTabs from "./Components/Screens/ScreenTabs";
import GetStarted from "./Components/GetStarted/GetStarted";
import { useEffect, useState } from "react";
import { sendToken } from "./Components/ServerCommunications/Services/PushNotifications";
import { retrieveData } from "./Components/Storage";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

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
export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    const sendExpoToken = async () => {
      const pid: any = await retrieveData("pid").catch((err) =>
        console.log(err)
      );
      const data = await sendToken(pid, expoPushToken);
    };
    {
      sendExpoToken();
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"ScreenTabs"} headerMode={"none"}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScreenTabs"
          component={ScreenTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"GetStarted"}
          component={GetStarted}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

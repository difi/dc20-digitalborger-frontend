import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Components/Login/Login";
import ScreenTabs from "./Components/Screens/ScreenTabs";
import GetStarted from "./Components/GetStarted/GetStarted";

const Stack = createStackNavigator();

//TODO: Add Init component for checking whether user has valid token or not
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"ScreenTabs"}>
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

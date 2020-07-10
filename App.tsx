import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Components/Login/Login";
import ScreenTabs from "./Components/Screens/ScreenTabs";

const Stack = createStackNavigator();

//TODO: Add Init component for checking whether user has valid token or not
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"ScreenTabs"}
            >

                <Stack.Screen name="Login" component={ScreenTabs} options={{headerShown: false}}/>
                <Stack.Screen name="ScreenTabs" component={ScreenTabs} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

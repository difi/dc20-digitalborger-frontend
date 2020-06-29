import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hourglass from "./Hourglass/Hourglass";
import Home from "./Home/Home";
import Notification from "./Notification/Notification";
import Profile from "./Profile/Profile";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';


const Tab = createMaterialBottomTabNavigator();

export default function ScreenTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: 'white' }}
            keyboardHidesNavigationBar={false}
            labeled = {true}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Hjem',
                tabBarIcon: ({ color }) => (
                    <Entypo name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarLabel: 'Varsel',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="ios-notifications" color={color} size={26} />
                ),
            }}/>
            <Tab.Screen name="Hourglass" component={Hourglass} options={{
                tabBarLabel: 'Timeglass',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="hourglass-end" color={color} size={26} />
                ),
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'Profil',
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="user" color={color} size={26} />
                ),
            }}/>
        </Tab.Navigator>
    );
}

import * as React from 'react';
import { Text, View } from 'react-native';
import VeienTilForerkort from "./Vegvesenet/VeienTilForerkort";
import { Header } from 'react-native-elements';

export default function Notification() {
    return (
        <View style={{height: '100%', width: '100%'}}>
            <Header/>
            <VeienTilForerkort/>
        </View>
    );
}

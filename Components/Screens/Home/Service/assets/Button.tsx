import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import {Dimensions, SafeAreaView, ScrollView, Text, View} from "react-native";
// @ts-ignore
import Icon from "react-native-vector-icons/Entypo";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 5,
        height: 50,
        justifyContent: "center",
    },
});

interface ButtonProps {
    label?: string;
    onPress: () => void;
    color: string;
    textColor: string;
}

const Button = ({ label, color, textColor, onPress }: ButtonProps) => {
    return (
        <RectButton
            style={[styles.container, { backgroundColor: color }]}
            {...{ onPress }}
        >
            <View style={{flex: 5, justifyContent: "center", paddingLeft: 20}}>
                <Text style={{color: textColor, fontWeight: "bold", fontSize: 15, }}>
                    {label}
                </Text>
            </View>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Icon name ="arrow-long-right" size={15} color={textColor}></Icon>
            </View>
        </RectButton>
    );
};

Button.defaultProps = { variant: "default" };

export default Button;

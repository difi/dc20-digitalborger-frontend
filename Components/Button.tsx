import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import {Dimensions, SafeAreaView, ScrollView, Text, View} from "react-native";

import { Theme } from "./Theme";

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
    },
});

interface ButtonProps {
    variant: "default" | "primary" | "transparent";
    label?: string;
    onPress: () => void;
    children?: ReactNode;
}

const Button = ({ label, onPress, variant, children }: ButtonProps) => {
    const theme = useTheme<Theme>();
    const backgroundColor =
        variant === "primary"
            ? "#2CB9B0"
            : variant === "transparent"
            ? "transparent"
            : "#F4F0EF";
    const color =
        variant === "primary" ? "white" : "#0C0D34";
    return (
        <RectButton
            style={[styles.container, { backgroundColor }]}
            {...{ onPress }}
        >
            {children ? (
                children
            ) : (
                <Text style={{ color }}>
                    {label}
                </Text>
            )}
        </RectButton>
    );
};

Button.defaultProps = { variant: "default" };

export default Button;

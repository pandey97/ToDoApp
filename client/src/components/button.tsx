import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { debounceHOC } from "../hocs/debounceHOC";

const TouchableOpacityMultipleTapHandler = debounceHOC(TouchableOpacity);

export interface ButtonProps {
    buttonColor?: string; // Optional color override
    onPress?: () => Promise<void>;
    style?: object; // Updated to object for StyleSheet compatibility
    text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { buttonColor, onPress, style, text } = props;
    return (
        <TouchableOpacityMultipleTapHandler
            accessibilityRole="button"
            onPress={onPress}
            style={[styles.btnContainerStyle, { backgroundColor: buttonColor || "#44aafe" }, style]}
        >
            <View>
                <Text style={styles.textStyle}>
                    {text}
                </Text>
            </View>
        </TouchableOpacityMultipleTapHandler>
    );
};

const styles = StyleSheet.create({
    btnContainerStyle: {
        alignItems: "center",
        alignSelf:'center',
        borderRadius: 15,
        margin: 15,
        width: "100%",
        paddingVertical: 14.5,
        opacity: 1,
    },
    textStyle: {
        color: "#fff", // White text color for contrast
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Button;

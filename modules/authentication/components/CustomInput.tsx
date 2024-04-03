import { COLORS, FONTS, MARGIN, METRICS, PADDING } from "../../../constants/theme";
import { View, StyleSheet, TextInput, ViewStyle, TextInputProps, Text, TextStyle } from 'react-native'
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";



interface CustomInputProps {
    title?: string;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    size: 's' | 'm' | 'l' ;
    password?: boolean;
    value?: string;
    inputProps?: TextInputProps;
    onFocus?: () => void;
    error?: string | boolean;
    titleTextStyle?: TextStyle;
    styles?: {
        mainContainerStyle?: ViewStyle;
        textInputStyle?: ViewStyle;

    }
}

const ButtonSizeTypes: Record<string, { width: number; height: number }> = {
    s: {
        width: METRICS.width(30),
        height: METRICS.height(5)
    },
    m: {
        width: METRICS.width(50),
        height: METRICS.height(5)
    },
    l: {
        width: METRICS.width(70),
        height: METRICS.height(4),
    },

}


const CustomInput = ({
    size,
    onChangeText,
    placeholder,
    password,
    onFocus,
    error,
    inputProps,
    title,
    titleTextStyle,
    styles




}: CustomInputProps) => {

    const { width: buttonWidth, height: buttonHeight } = size ? ButtonSizeTypes[size || 'm'] : { width: METRICS.width(76), height: METRICS.height(6.4) };
    const [isFocused, setIsFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(password);



    const stylesInput = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: PADDING.xs,
            borderRadius: 6,
            backgroundColor: 'white',
            width: buttonWidth,
            height: buttonHeight,
            borderColor: error ? 'white' : isFocused ? 'white' : 'white',
            borderWidth: METRICS.width(0.3),
        },
        inputContainer: {
            flex: 1,
            padding: PADDING.s,
            fontSize: FONTS.size.xl,
            fontFamily: FONTS.family.weight.regular,
            color: 'black',
        },
        passwordIconStyle: {
            fontSize: METRICS.width(5.5),
            color: 'grey'
        },
        errorText: {
            marginTop: MARGIN.s,
            color: "red",
            fontFamily: FONTS.family.weight.regular
        }
    })


    return (
        <View style={{gap:8}}>
            {<Text style={titleTextStyle}>{title}</Text>}
            <View style={{ ...stylesInput.container, ...styles?.mainContainerStyle }}>
                <TextInput
                    autoCapitalize='none'
                    onFocus={() => {
                        if (onFocus) {
                            onFocus();
                        }
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    style={{ ...stylesInput.inputContainer, ...styles?.textInputStyle }}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor='grey'
                    secureTextEntry={hidePassword}
                    {...inputProps}
                />
                {password && <Feather
                    onPress={() => setHidePassword(!hidePassword)}
                    name={hidePassword ? "eye" : "eye-off"}
                    style={stylesInput.passwordIconStyle} />}
            </View>
            {error && <Text style={stylesInput.errorText}>{error}</Text>}
        </View>

    )
}

export default CustomInput



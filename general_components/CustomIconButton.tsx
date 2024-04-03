import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import { COLORS, FONTS, METRICS } from "../constants/theme";
import React, { ReactNode } from 'react';




interface CustomIconButtonProps {
    buttonType?: 'primary' | 'secondary' | 'outlined';
    size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
    onPress?: () => void;
    icon: ReactNode;
    style?: ViewStyle;
  }
  
  const buttonColorTypes: Record<string, { backgroundColor: string; iconColor: string }> = {
    primary: {
      backgroundColor: COLORS.whiteColor,
      iconColor: COLORS.primaryColor,
    },
    secondary: {
      backgroundColor: COLORS.primaryColor,
      iconColor: COLORS.whiteColor,
    },
    outlined: {
      backgroundColor: COLORS.blurTransparentColor,
      iconColor: COLORS.whiteColor,
    },
  };
  
  const buttonSizeTypes: Record<string, { width: number; height: number }> = {
      s: {
        width: METRICS.width(5),
        height: METRICS.width(5),
      },
      m: {
        width: METRICS.width(6),
        height: METRICS.width(6),
      },
      l: {
        width: METRICS.width(10),
        height: METRICS.width(10),
      },
      xl: {
        width: METRICS.width(15),
        height: METRICS.width(15),
      },
      xxl: {
        width: METRICS.width(20),
        height: METRICS.width(20),
      },
    };
  
  const CustomIconButton = ({
    buttonType,
    size,
    onPress,
    icon,
    style,
  }: CustomIconButtonProps) => {
  
    const {backgroundColor: btnBackgroundColor, iconColor: iconColor } = buttonType ? buttonColorTypes[buttonType] : { backgroundColor: COLORS.primaryColor, iconColor: COLORS.whiteColor} 
    const {width: btnWidth, height: btnHeight} = size ? buttonSizeTypes[size] : {width: METRICS.width(7), height: METRICS.width(7)}
  
  
    const stylesButton = StyleSheet.create({
      touchableContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 36,
        padding: 4,
        backgroundColor: btnBackgroundColor,
        width: btnWidth,
        height: btnHeight,
      },
    });

    return (
        <TouchableOpacity style={{...stylesButton.touchableContainer,...style}} onPress={onPress} >
          {React.cloneElement(icon as React.ReactElement, { color: iconColor })}
        </TouchableOpacity>
    );
}

export default CustomIconButton;

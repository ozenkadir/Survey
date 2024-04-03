import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import { COLORS, FONTS, METRICS } from "../constants/theme";

interface CustomButtonProps {
  title: string;
  prefixIcon?: React.ReactNode;
  size?: 'xxs'|'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  onPress?: () => void;
  suffixIcon?: React.ReactNode;
  prefixImage?: ImageSourcePropType;
  suffixImage?: ImageSourcePropType;
  styles?: {
    touchableContainerStyle?: ViewStyle;
    imageStyle?: ImageStyle;
    textStyle?: TextStyle;
  }
}


const ButtonSizeTypes: Record<string, { width: number; height: number }> = {
  xxs: {
    width: METRICS.width(17),
    height: METRICS.height(3),  
  },
  xs: {
    width: METRICS.width(19),
    height: METRICS.height(5),
  },
  s: {
    width: METRICS.width(35),
    height: METRICS.height(5)
  },
  m: {
    width: METRICS.width(40),
    height: METRICS.height(5)
  },
  l: {
    width: METRICS.width(43),
    height: METRICS.height(5),
  },
  xl: {
    width: METRICS.width(80),
    height: METRICS.height(7)
  },
  xxl: {
    width: METRICS.width(96),
    height: METRICS.height(7)
  },

};


const CustomButton = ({
  title,
  prefixIcon,
  size,
  onPress,
  suffixIcon,
  prefixImage,
  suffixImage,
  styles}: CustomButtonProps) => {

  const {width: buttonWidth, height: buttonHeight} = size ? ButtonSizeTypes[size || 'm'] : {width: METRICS.width(30), height: METRICS.height(7)};

  const stylesButton = StyleSheet.create({
    touchableContainer: {
      paddingHorizontal: 14,
      alignItems: 'center',
      borderRadius: 36,
      backgroundColor: COLORS.primaryColor,
      flexDirection: 'row',
      justifyContent: 'center',
      width: buttonWidth,
      height: buttonHeight,
    },
    imageContainer: {
      width: METRICS.width(12),
      height: METRICS.height(3),
      resizeMode: 'contain',
    },
    textStyle: {
      color: 'white',
      fontFamily: FONTS.family.weight.bold,
      fontSize: FONTS.size.l
    }
  });

  return (
      <TouchableOpacity 
        style={{...stylesButton.touchableContainer, ...styles?.touchableContainerStyle}}
        onPress={onPress}>
        {prefixIcon && <View style={{ marginRight: 8 }}>{prefixIcon}</View>}
        {prefixImage && <Image source={prefixImage} style={{...stylesButton.imageContainer, ...styles?.imageStyle}} />}
        <Text  style={{...stylesButton.textStyle, ...styles?.textStyle}}>{title}</Text>
        {suffixImage && <Image source={suffixImage} style={{...stylesButton.imageContainer, ...styles?.imageStyle}} />}
        {suffixIcon && <View style={{ marginLeft: 8 }}>{suffixIcon}</View>}
      </TouchableOpacity>
  );
};

export default CustomButton;
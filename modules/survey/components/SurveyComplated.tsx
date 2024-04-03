import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, FONTS, METRICS} from '../../../constants/theme';
import { IMAGES } from '../../../constants/images'




export const SurveyComplated = () => {
  return (
    <View style={surveyComplatedStyle.mainContainer}>
        <Image source={IMAGES.surveyComplated}   style={surveyComplatedStyle.imageView}/>
        <Text style={surveyComplatedStyle.textStyle} >Anket Tamamlandı!</Text>
        <Text style={surveyComplatedStyle.subTextStyle}>Veriler oluşturuluyor...</Text>
    </View>
  )
}

const surveyComplatedStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',    
      },
      textStyle: {
        textAlign: 'center',
        fontFamily: FONTS.family.weight.medium,
        fontSize: FONTS.size.l,
        marginTop: METRICS.height(4),
        marginBottom: METRICS.height(1)
      },
      subTextStyle: {
        textAlign: 'center',
        fontFamily: FONTS.family.weight.light,
        fontSize: FONTS.size.m,
      },
      imageView: {
        resizeMode: 'contain',
        width: METRICS.width(35),
        height: METRICS.width(35),
      }
})

import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { surveyOverviewScreenStyles } from '../styles/SurveyOverviewStyle'
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import CustomButton from 'general_components/CustomButton';
import { useUserContext } from 'store/userContext';
import {METRICS, COLORS, PADDING, FONTS} from "../../../constants/theme"

export const SurveyOverviewScreen = () => {

  const { total } = useUserContext();

  return (
    <SafeAreaView style={surveyOverviewScreenStyles.mainContainer}>
      <View style={{justifyContent:'center', alignItems:'center', gap:18, marginTop: METRICS.height(8)}}>
      <Text style={{fontSize: FONTS.size.l, fontFamily:FONTS.family.weight.medium}}>Tamamlanan Anketler</Text>
      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center', gap:24}}>
      <View style={{alignItems:'center'}}>
        <Text style={{fontSize: 36, fontFamily:FONTS.family.weight.medium, color: COLORS.primaryColor}}>{total}</Text>
          <Text style={{fontSize: FONTS.size.l, fontFamily: FONTS.family.weight.medium}}>Puan</Text>
      </View>
      <View style={{width:2,height:METRICS.height(6), backgroundColor: 'rgba(217, 217, 217, 1)'}}/>
      <View style={{alignItems:'center'}}>
        <Text style={{fontSize: 36, fontFamily:FONTS.family.weight.medium, color: COLORS.primaryColor}}>1</Text>
          <Text style={{fontSize: FONTS.size.l, fontFamily: FONTS.family.weight.medium}}>Toplam</Text>
      </View>
      <View style={{width:2,height:METRICS.height(6), backgroundColor: 'rgba(217, 217, 217, 1)'}}/>
      <View style={{alignItems:'center'}}>
        <Text style={{fontSize: 36, fontFamily:FONTS.family.weight.medium, color: COLORS.primaryColor}}>1</Text>
        <Text style={{fontSize: FONTS.size.l, fontFamily: FONTS.family.weight.medium}}>Bugün</Text>
      </View>
      </View>
      </View>

      <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:METRICS.width(6), marginTop:METRICS.width(10), gap:8}}>
        <FontAwesome name="bars" size={16} color="black" />
        <Text style={{fontFamily:FONTS.family.weight.medium, fontSize:FONTS.size.l}}>Liste</Text>
      </View>
      <View style={{ width: METRICS.width(90),padding:PADDING.m, height:METRICS.height(20),backgroundColor: 'rgba(241, 241, 241, 1)',borderRadius:16,gap:8}}>
        <Text style={{fontFamily:FONTS.family.weight.medium, fontSize:FONTS.size.l, color: COLORS.primaryColor}}>Anket</Text>
        <View style={{ flexDirection: 'row',gap:4, alignItems:'center' }}>
          <MaterialIcons name="date-range" size={18} color = {COLORS.primaryColor} />
          <Text style={{fontFamily:FONTS.family.weight.regular, fontSize:FONTS.size.m,marginRight:10}}>03.05.2024</Text>

          <AntDesign name="clockcircleo" size={16} color = {COLORS.primaryColor} />
          <Text style={{fontFamily:FONTS.family.weight.regular, fontSize:FONTS.size.m}}>20.30</Text>
        </View>
        <CustomButton styles={{touchableContainerStyle:{position:'absolute', bottom:20,right:20}}} size='l' title={`Modunuz: ${total}`} />
      </View>
    </SafeAreaView>
  )
}


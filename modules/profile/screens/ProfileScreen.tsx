import React, { useContext } from 'react'
import { View,Text } from 'react-native'
import { profileScreenStyles } from '../styles/ProfileScreenStyle'
import { Ionicons } from '@expo/vector-icons';
import {METRICS, COLORS, PADDING, FONTS, MARGIN} from "../../../constants/theme"
import { FontAwesome } from '@expo/vector-icons';
import { useUserContext } from 'store/userContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from 'general_components/CustomButton';
import { AuthContext } from 'store/auth-context';
import { useAppNavigation } from 'utils/UseAppNavigation';


export const ProfileScreen = () => {

  const navigation = useAppNavigation()

  const { logout, isAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    // Kullanıcıyı login ekranına yönlendir
    navigation.navigate("Authentications",{screen: "LoginScreen"});
    console.log(isAuthenticated)

  };

  const { userName } = useUserContext();

  return (
    <SafeAreaView style={profileScreenStyles.mainContainer}>
      <View style={{flexDirection:'row',alignSelf:'flex-start',justifyContent:'center',marginLeft:METRICS.width(6), marginTop:METRICS.width(10), gap:8}}>
        <Ionicons name="person" size={18} color={COLORS.primaryColor} />        
        <Text style={{alignSelf:'baseline',fontFamily:FONTS.family.weight.bold, fontSize:FONTS.size.l, color: COLORS.primaryColor}}>PROFİL</Text>
      </View>
      <Text style={{fontFamily:FONTS.family.weight.medium, fontSize:FONTS.size.m, color: 'rgba(185, 185, 185, 1)', alignSelf:'flex-start', marginLeft: METRICS.width(6),marginBottom: -8 }}>Hesap Bilgileri</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between', backgroundColor: 'rgba(241, 241, 241, 1)', borderRadius:12, width:METRICS.width(90), height:METRICS.height(10), padding: PADDING.m}}>
        <View style={{justifyContent:'center', gap:8}}>
          <Text style={{fontFamily:FONTS.family.weight.medium, fontSize:FONTS.size.m}}>Nickname</Text>
          <Text style={{fontFamily:FONTS.family.weight.regular, fontSize:FONTS.size.m, color: 'rgba(29, 29, 27, 1)'}}>{userName}</Text>
        </View>
        <FontAwesome  style={{alignSelf:'center'}} name="edit" size={METRICS.width(7)} color={COLORS.primaryColor} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between', backgroundColor: 'rgba(241, 241, 241, 1)', borderRadius:12, width:METRICS.width(90), height:METRICS.height(10), padding: PADDING.m}}>
        <View style={{justifyContent:'center', gap:8}}>
          <Text style={{fontFamily:FONTS.family.weight.medium, fontSize:FONTS.size.m}}>E-mail</Text>
          <Text style={{fontFamily:FONTS.family.weight.regular, fontSize:FONTS.size.m, color: 'rgba(29, 29, 27, 1)'}}>test@test.com</Text>
        </View>
        <FontAwesome  style={{alignSelf:'center'}} name="edit" size={METRICS.width(7)} color={COLORS.primaryColor} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between', backgroundColor: 'rgba(241, 241, 241, 1)', borderRadius:12, width:METRICS.width(90), height:METRICS.height(10), padding: PADDING.m}}>
        <View style={{justifyContent:'center', gap:8}}>
          <Text style={{fontFamily:FONTS.family.weight.medium, fontSize:FONTS.size.m}}>Doğum Tarihi</Text>
          <Text style={{fontFamily:FONTS.family.weight.regular, fontSize:FONTS.size.m, color: 'rgba(29, 29, 27, 1)'}}>01.01.2002</Text>
        </View>
        <FontAwesome  style={{alignSelf:'center'}} name="edit" size={METRICS.width(7)} color={COLORS.primaryColor} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between', backgroundColor: 'rgba(241, 241, 241, 1)', borderRadius:12, width:METRICS.width(90), height:METRICS.height(10), padding: PADDING.m}}>
        <View style={{justifyContent:'center', gap:8}}>
          <Text style={{fontFamily:FONTS.family.weight.medium, fontSize:FONTS.size.m}}>Cinsiyet</Text>
          <Text style={{fontFamily:FONTS.family.weight.regular, fontSize:FONTS.size.m, color: 'rgba(29, 29, 27, 1)'}}>erkek</Text>
        </View>
        <FontAwesome  style={{alignSelf:'center'}} name="edit" size={METRICS.width(7)} color={COLORS.primaryColor} />
      </View>

      <CustomButton title='Logout' onPress={handleLogout} />

        
    </SafeAreaView>
  )
}

import CustomButton from 'general_components/CustomButton'
import { ImageBackground, View, Text } from 'react-native'
import { useContext } from 'react';
import { AuthContext } from 'store/auth-context';
import { useAppNavigation } from 'utils/UseAppNavigation';
import { IMAGES } from 'constants/images';
import { landingScreenStyles } from '../styles/LandingScreenStyle';
import { useUserContext } from 'store/userContext';
import {METRICS, COLORS, PADDING, FONTS, MARGIN} from "../../../constants/theme"
import { LinearGradient } from 'expo-linear-gradient';



export const LandingScreen = () => {
  const navigation = useAppNavigation()


  const { userName } = useUserContext()



  return (
    <ImageBackground source={IMAGES.authenticationBackground} style={landingScreenStyles.imageView}>
        <LinearGradient
        colors={['transparent',  COLORS.whiteColor, COLORS.whiteColor ]}
        style={{position:'absolute', bottom:0, right:0, left:0, height:METRICS.height(80), justifyContent:'center',alignItems:'center', gap: 24}}

        >
          <View style={{flexDirection:'row', marginTop: METRICS.height(24) }}>
          <Text style={{fontSize: FONTS.size.xl, fontFamily:FONTS.family.weight.medium, color: COLORS.blackColor}}>Merhaba </Text>
          <Text style={{fontSize: FONTS.size.xl, fontFamily:FONTS.family.weight.medium, color: COLORS.primaryColor}}>{userName}</Text>
          </View>
          <CustomButton title='ANKETE BAŞLA' styles={{touchableContainerStyle:{width:METRICS.width(45), height: METRICS.height(5.6)}}} onPress={() => navigation.navigate("Survey", {screen:'SurveyMainScreen'})} />

        </LinearGradient>


    </ImageBackground>
  )
}

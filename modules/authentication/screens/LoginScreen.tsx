import React, { useState, useEffect, useContext } from 'react'
import { Button, Image, ImageBackground, KeyboardAvoidingView, Text, View, Modal, } from 'react-native'
import { loginScreenStyles } from '../styles/LoginScreenStyles'
import { IMAGES } from 'constants/images'
import CustomInput from '../components/CustomInput'
import { METRICS, FONTS, MARGIN, COLORS } from "../../../constants/theme"
import CustomButton from 'general_components/CustomButton'
import { useAppNavigation } from 'utils/UseAppNavigation'
import RectangleButton from '../components/RectangleButton'
import KvkkToggleText from '../components/KvkkToggleText'
import axios from 'axios'
import { AuthContext } from 'store/auth-context'
import { useUserContext } from 'store/userContext'



const LoginScreen = () => {

  const navigation = useAppNavigation()

  const { userName, updateUserName} = useUserContext();


  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>("")
  const [token, setToken] = useState<string>("");
  
    const resetLoginScreen = () => {
      setLoginVisible(true);
    };
  
    useEffect(() => {
      const onFocus = () => resetLoginScreen();
      const unsubscribe = navigation.addListener('focus', onFocus);
  
      // Listener'ı temizleme
      return () => {
        unsubscribe();
      };
    }, [navigation]);
    

const { authenticate } = useContext(AuthContext);


const loginHandler = () => {
    axios.post('https://fakestoreapi.com/auth/login', {
        username: userName,
        password: password
    })
    .then(response => {
        const { data } = response;
        // Check if token exists in the response
        if (data.token) {
            authenticate(data.token);
            // Token exists, navigate user to the landing page
            setToken(data.token);
            console.log(`${userName} isimli ve ${password} şifreli kullanıcı, ${data.token} tokeni ile giriş yaptı `)
            setLoginVisible(false)
            navigation.navigate("BottomTabs", { screen: 'Landing' });
        } else {
            // Token doesn't exist, handle the error or show a message to the user
            console.error("Token not found in response");
        }
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
    });
};

  const [loginVisible, setLoginVisible] = useState<boolean>(true);
  const [signUpVisible, setsignupVisible] = useState<boolean>(false);
  const [kvkkVisible, setKvkkVisible] = useState<boolean>(false);


  return (
    <ImageBackground style={loginScreenStyles.imageView} source={IMAGES.authenticationBackground}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={loginVisible}
      >
        <View style={loginScreenStyles.mainContainer} >
          <Text>Hoşgeldiniz</Text>
          <CustomInput
            title='E-Mail'
            size='l'
            value={userName}
            onChangeText={text => updateUserName(text)}
          />
          <Text style={{ width: METRICS.width(70), fontFamily: FONTS.family.weight.regular, fontSize: FONTS.size.s, marginBottom: MARGIN.s }}>
            Gizliliğinizi önemsiyoruz.Lütfen ad ve soyad girmeden userName oluşturunuz
          </Text>
          <CustomInput
            title='Şifre'
            size='l'
            value={password}
            onChangeText={text => setPassword(text)}
            password
          />
          <Text style={{ textAlign: 'right', width: METRICS.width(70), fontFamily: FONTS.family.weight.regular, fontSize: FONTS.size.s }}>
            Şifremi Unuttum
          </Text>
          <CustomButton title='Giriş Yap' size='l' onPress={loginHandler} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontFamily: FONTS.family.weight.medium, color: 'black' }}>Üye değil misiniz? </Text>
            <Text onPress={() => { setLoginVisible(!loginVisible); setsignupVisible(!signUpVisible) }} style={{ fontFamily: FONTS.family.weight.medium, color: COLORS.primaryColor }}>Hesap Oluştur</Text>
          </View>
        </View>
      </Modal>
      <Modal
        animationType='slide'
        transparent={true}
        visible={signUpVisible}
      >
        <View style={loginScreenStyles.mainContainer} >
          <Text>Cinsiyetinizi Seçiniz</Text>
          <View style={{ flexDirection: 'row', gap: METRICS.width(6) }}>
            <RectangleButton size='s' title='Kadın' />
            <RectangleButton size='s' title='Erkek' />
          </View>
          <CustomInput size='l' title='E-Mail' />
          <CustomInput size='l' title='Nickname' />
          <Text style={{ width: METRICS.width(70), fontFamily: FONTS.family.weight.regular, fontSize: FONTS.size.s, marginBottom: MARGIN.s }}>
            Gizliliğinizi önemsiyoruz.Lütfen ad ve soyad girmeden nickname oluşturunuz
          </Text>
          <CustomInput size='l' title='Şifre' />
          <CustomInput size='l' title='Doğum Tarihi' />
          <CustomButton title='İLERLE' size='l' onPress={() => { setsignupVisible(!signUpVisible); setKvkkVisible(!kvkkVisible) }} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontFamily: FONTS.family.weight.medium, color: 'black' }}>Hesabınız Var Mı? </Text>
            <Text onPress={() => { setLoginVisible(!loginVisible); setsignupVisible(!signUpVisible) }} style={{ fontFamily: FONTS.family.weight.medium, color: COLORS.primaryColor }}>Giriş Yap</Text>
          </View>
        </View>
      </Modal>
      <Modal
        animationType='slide'
        transparent={true}
        visible={kvkkVisible}
      >
        <View style={{ ...loginScreenStyles.mainContainer, gap: 16 }} >
          <View style={{ marginVertical: MARGIN.l, alignItems: 'center' }}>
            <Text style={{ width: METRICS.width(88), textAlign: 'center' }}>Hassas Veriler Hakkında</Text>
            <Text style={{ width: METRICS.width(76), textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's</Text>
          </View>
          <KvkkToggleText text="*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and?
            Kabul Ediyorum"/>
          <KvkkToggleText text="*Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Kabul ediyorum"/>
          <KvkkToggleText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
          <CustomButton title='İLERLE' size='l' />
        </View>
      </Modal>
    </ImageBackground>
  )
}

export default LoginScreen

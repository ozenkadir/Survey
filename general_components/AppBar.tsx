import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType, TextStyle, ViewStyle, ImageStyle } from 'react-native';
import { COLORS, FONTS, MARGIN, METRICS } from "../constants/theme";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useState } from 'react';
import CustomIconButton from './CustomIconButton';
import { Entypo } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useAppNavigation } from 'utils/UseAppNavigation';
import { useUserContext } from 'store/userContext';



const AppBar = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [remainingTime, setRemainingTime] = useState(1800);
    const { currentQuestionIndex } = useUserContext(); // Değişen kısım



    const handleTimeComplete = () => {
        // Süre bittiğinde yapılacak işlemler burada gerçekleştirilebilir
        console.log("Süre bitti!");
    };

    const navigation = useAppNavigation()


    return (
        <View style={appBarStyles.mainContainer}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:METRICS.width(90), marginTop:MARGIN.s}}>
                <CustomIconButton buttonType='primary' size='l' icon={<Entypo name="home" size={METRICS.width(6)}  />} onPress={() => navigation.navigate("BottomTabs", {screen: "Landing"})}/>
            <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={remainingTime}
                colors={["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => {
                    setIsPlaying(false); // Süre bittiğinde oyunu durdur
                    handleTimeComplete(); // Süre tamamlandığında gerçekleştirilecek işlemler
                    return { shouldRepeat: true, delay: 2 }; // Tekrar başlatmak için gerekli ayarlar
                }}
                updateInterval={1}
                trailColor='#808080'
                size={100}

            >
                {({ remainingTime, color }) => (
                    <Text style={{ color, fontSize: FONTS.size.l, fontFamily: FONTS.family.weight.semiBold }}>
                        {formatTime(remainingTime)}
                    </Text>
                )}
            </CountdownCircleTimer>
            </View>
            <View style={{width:METRICS.width(82), gap:8, justifyContent:'center', alignItems:'center'}}>
                <Text style={{ color:COLORS.whiteColor, fontSize: FONTS.size.l, fontFamily: FONTS.family.weight.semiBold, alignSelf:'flex-start' }}>Anket Konu Başlığı</Text>
                <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
                    <Slider                    
                    style={{width: METRICS.width(75)}}
                    minimumValue={0}
                    maximumValue={3}
                    minimumTrackTintColor='#FFFFFF'
                    maximumTrackTintColor='#808080'
                    thumbTintColor='blue'
                    step={1}
                    value={currentQuestionIndex + 1}
                    />
                    <Text style={{ color:COLORS.whiteColor, fontSize: FONTS.size.l, fontFamily: FONTS.family.weight.semiBold}}>{currentQuestionIndex + 1}/3</Text>
                </View>

            </View>


        </View>
    )
}

export default AppBar

const appBarStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS.primaryColor,
        width: METRICS.width(100),
        height: METRICS.height(24),
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        justifyContent: 'center',
        alignItems:'center',

    }
})

const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};



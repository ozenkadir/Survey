import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { COLORS, FONTS, METRICS } from '../../../constants/theme';


const ChooseAvatar = ({ updateScore }: { updateScore: (points: number) => void }) => {
    const [sliderValue, setSliderValue] = useState<number>(0);
    const [lastScore, setLastScore] = useState(0);

    const getIconName = (value: number) => {
        switch (value) {
            case 0:
                return "face-frown";
            case 1:
                return "face-meh";
            case 2:
                return "face-smile-beam";
            default:
                return "face-meh";
        }
    };

    const handleSliderChange = (value: number) => {
        const points = value; // Örnek olarak slider'ın kendisi puanı temsil ediyor
        if (lastScore !== 0) {
            updateScore(points - lastScore); // Yeni slider değerini ekle, önceki slider değerini çıkar
        } else {
            updateScore(points); // İlk defa slider hareket ettirildiğinde sadece yeni değeri ekle
        }
        setSliderValue(value);
        setLastScore(points);
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>
                Şu anda nasıl hissediyorsunuz?
            </Text>
            <FontAwesome6 name={getIconName(sliderValue)} size={120} color={COLORS.primaryColor} />
            <Slider
                style={{width: METRICS.width(75)}}
                minimumValue={0}
                maximumValue={2}
                minimumTrackTintColor='rgba(160, 170, 255, 0.5)'
                maximumTrackTintColor='rgba(160, 170, 255, 0.5)'
                thumbTintColor='blue'
                step={1}
                value={sliderValue}
                onValueChange={(value: number) => handleSliderChange(value)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: METRICS.height(10)
    },
    textStyle: {
        width: METRICS.width(84),
        textAlign: 'center',
        fontFamily: FONTS.family.weight.regular,
        fontSize: FONTS.size.l,
    },
});

export default ChooseAvatar;

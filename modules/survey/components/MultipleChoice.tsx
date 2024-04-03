import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChoiceButton from './ChoiceButton';
import { COLORS, FONTS, METRICS } from '../../../constants/theme';

const buttonData = [
    { title: 'ÇOK İYİ', color: COLORS.greenButtonColor },
    { title: 'İYİ', color: COLORS.darkGreenButtonColor },
    { title: 'NORMAL', color: COLORS.yellowButtonColor },
    { title: 'KÖTÜ', color: COLORS.orangeButtonColor },
    { title: 'ÇOK KÖTÜ', color: COLORS.redButtonColor },
];

const buttonScores: { [key: string]: number } = {
    "ÇOK İYİ": 5,
    "İYİ": 4,
    "NORMAL": 3,
    "KÖTÜ": 2,
    "ÇOK KÖTÜ": 1
};

const MultipleChoice = ({ updateScore }: { updateScore: (points: number) => void }) => {
    const [pressedButton, setPressedButton] = useState('');
    const [lastScore, setLastScore] = useState(0);

    const handleButtonPress = (title:string) => {
        const points = buttonScores[title];
        if (pressedButton !== '') {
            const lastPoints = buttonScores[pressedButton];
            updateScore(points - lastPoints); // Yeni butonun puanını ekle, önceki butonun puanını çıkar
        } else {
            updateScore(points); // İlk defa butona basıldığında sadece yeni butonun puanını ekle
        }
        setPressedButton(title);
        setLastScore(points);
    };

    useEffect(() => {
        console.log(pressedButton,lastScore);
    }, [pressedButton]);

    const renderButtons = () => {
        return buttonData.map(({ title, color }) => (
            <View key={title} >
                <ChoiceButton
                    size="xs"
                    title={title}
                    styles={{
                        touchableContainerStyle: {
                            backgroundColor: color,
                            marginTop: title === pressedButton ? -10 : 0,
                            marginBottom: title === pressedButton ? 10 : 0,
                        },
                        textStyle: { fontFamily: FONTS.family.weight.medium, fontSize: FONTS.size.s, color: COLORS.whiteColor}
                    }}
                    onPress={() => handleButtonPress(title)}
                />
                <View style={[styles.separator, { backgroundColor: title === pressedButton ? color : 'grey' }]} />
            </View>
        ));
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>
                Lorem Ipsum is simply dummy text of the printingdummy text ever since the 1500s?
            </Text>
            <View style={styles.buttonsWrapper}>{renderButtons()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        width: METRICS.width(100),
        height: METRICS.height(50),
        alignItems: 'center',
        gap: METRICS.height(10)
    },
    textStyle: {
        width: METRICS.width(84),
        textAlign: 'center',
        fontFamily: FONTS.family.weight.regular,
        fontSize: FONTS.size.l,
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginHorizontal: 6,
    },
    separator: {
        width: METRICS.width(18),
        height: 2,
        backgroundColor: 'rgba()',
        marginTop:10
    },
});

export default MultipleChoice;

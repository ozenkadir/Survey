import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../constants/theme';
import CustomButton from 'general_components/CustomButton';

const buttons = [
    { title: 'Teşekkür Ediyorum', points: 5 },
    { title: 'Evet', points: 3 },
    { title: 'Hayır', points: 1 },
    { title: 'Kullanmıyorum', points: 2 },
    { title: 'Lorem ipsum', points: 4 },
    { title: 'Lorem ipsum', points: 2 },
    { title: 'Kullanıyorum', points: 3 },
    { title: 'Lorem', points: 1 },
];

const MultipleButtons = ({ updateScore }: { updateScore: (points: number) => void }) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [lastScore, setLastScore] = useState(0);

  const handleButtonPress = (buttonIndex: number) => {
    const points = buttons[buttonIndex].points;
    if (selectedButton !== null) {
      const lastPoints = buttons[selectedButton].points;
      updateScore(points - lastPoints); // Yeni butonun puanını ekle, önceki butonun puanını çıkar
    } else {
      updateScore(points); // İlk defa butona basıldığında sadece yeni butonun puanını ekle
    }
    setSelectedButton(buttonIndex);
    setLastScore(points);
  };

  return (
    <View style={multipleButtonsStyle.mainContainer}>
      <Text style={multipleButtonsStyle.textStyle}>
        Lorem Ipsum is simply dummy text of the printingdummy text ever since?Lorem Ipsum is simply dummy text of the printingdummy text ever since?
      </Text>
      <View style={multipleButtonsStyle.buttonContainer}>
        {buttons.map((button, index) => (
          <CustomButton
            key={index}
            size={button.title.length > 12 ? 'l' : (button.title.length > 8 ? 's' : 'xs')}
            title={button.title}
            styles={{
              touchableContainerStyle: {
                backgroundColor: selectedButton === index ? COLORS.primaryColor : 'rgba(160, 170, 255, 0.5)',
                marginRight: 8, // İsteğe bağlı aralık ekleyebilirsiniz
                marginBottom: 8, // İsteğe bağlı aralık ekleyebilirsiniz
              },
              textStyle: {
                fontFamily: FONTS.family.weight.semiBold,
                fontSize: FONTS.size.m,
              }
            }}
            onPress={() => handleButtonPress(index)}
          />
        ))}
      </View>
    </View>
  );
}

export default MultipleButtons;

const multipleButtonsStyle = StyleSheet.create({
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
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
});

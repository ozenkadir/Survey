import React, { useState } from 'react';
import { View } from 'react-native';
import { surveyMainScreenStyles } from '../styles/SurveyMainScreenStyles';
import MultipleChoice from '../components/MultipleChoice';
import CustomButton from 'general_components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { METRICS, FONTS } from '../../../constants/theme';
import ChooseAvatar from '../components/ChooseAvatar';
import MultipleButtons from '../components/MultipleButtons';
import { SurveyComplated } from '../components/SurveyComplated';
import { useAppNavigation } from 'utils/UseAppNavigation';
import { useUserContext } from 'store/userContext';

type QuestionComponent = React.FC<{ updateScore: (points: number) => void }>;

const questionComponents: QuestionComponent[] = [MultipleChoice, MultipleButtons, ChooseAvatar];



export const SurveyMainScreen = () => {
  const {total , updateTotal, currentQuestionIndex, updateCurrentQuestionIndex} = useUserContext();
  const navigation = useAppNavigation()
  const [score, setScore] = useState<number>(0);
  //const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [surveyCompleted, setSurveyCompleted] = useState<boolean>(false);

  const updateScore = (points: number) => {
    setScore(score + points);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionComponents.length - 1) {
      updateCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setSurveyCompleted(true);
      handleScoreChange(score)
      console.log(score)
      
    }
  };

  const handleScoreChange = (newScore: number) => {
    updateTotal(newScore);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      updateCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishSurvey = () => {
    // Burada anketin bitirilmesiyle ilgili navigasyonu yönetebiliriz.
    // Örneğin, anket tamamlandığında başka bir ekrana yönlendirme yapılabilir.
    navigation.navigate("BottomTabs", {screen:'Anket'}); // Örnek olarak AnaSayfa'ya yönlendirme yaptık. Sizin kullanımınıza göre değişebilir.
  };

  const CurrentQuestionComponent = questionComponents[currentQuestionIndex];

  return (
    <View style={surveyMainScreenStyles.mainContainer}>
      {surveyCompleted ? (
        <SurveyComplated  text={total}/>
      ) : (
        <CurrentQuestionComponent updateScore={updateScore} />
      )}
      <View style={{ flexDirection:'row', gap:12, position:'absolute', bottom:50}}>
        {currentQuestionIndex > 0 && (
          <View style={{ alignSelf: 'center', justifyContent:'center', backgroundColor: 'rgba(160, 170, 255, 0.5)', borderRadius:40, padding:8  }}> 
            <Ionicons name="arrow-back" size={METRICS.width(6)} color="grey" onPress={handlePreviousQuestion} />
          </View>
        )}
        {surveyCompleted ? (
          <CustomButton title='Bitir' size='m' onPress={handleFinishSurvey} />
        ) : (
          <CustomButton title='Sonraki Soru' size='m' onPress={handleNextQuestion} />
        )}
      </View>
    </View>
  )
}

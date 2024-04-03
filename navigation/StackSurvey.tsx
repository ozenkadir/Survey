import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppBar from "general_components/AppBar";
import { SurveyMainScreen } from "modules/survey/screens/SurveyMainScreen";

const SurveyStack =  createNativeStackNavigator<StackSurveyParamList>();

export type StackSurveyParamList = {
    SurveyMainScreen:undefined;

}

const Survey = () => {
    return(
        <SurveyStack.Navigator>
            <SurveyStack.Screen name="SurveyMainScreen" component={SurveyMainScreen} options={({ }) => ({
            header: () => (
                <AppBar />

            )
        })}
        />
        </SurveyStack.Navigator>
    )
}

export default Survey;
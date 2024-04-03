import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "modules/authentication/screens/LoginScreen";


const AuthenticationStack = createNativeStackNavigator<StackAuthenticationParamList>();

export type StackAuthenticationParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    KvkkScreen: undefined
}

const Authentication = () => {
    return (
        <AuthenticationStack.Navigator >
            <AuthenticationStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        </AuthenticationStack.Navigator>
    )
}

export default Authentication;




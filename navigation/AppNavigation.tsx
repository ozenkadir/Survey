import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation, { bottomNavigationParamList } from "./BottomNavigationBar";
import Authentication, { StackAuthenticationParamList } from "./StackAuthentication";
import Survey, { StackSurveyParamList } from "./StackSurvey";
import { useState } from "react";
import AuthContextProvider from "store/auth-context";
import { UserProvider } from "store/userContext";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    BottomTabs: NavigatorScreenParams<bottomNavigationParamList>;
    Authentications: NavigatorScreenParams<StackAuthenticationParamList>;
    Survey: NavigatorScreenParams<StackSurveyParamList>;
}


const AppNavigation = () => {


    return (
        <AuthContextProvider>
            <UserProvider>
                <NavigationContainer>
                    <RootStack.Navigator initialRouteName="Authentications">
                        <RootStack.Screen name="BottomTabs" component={BottomTabNavigation} options={{ headerShown: false }} />
                        <RootStack.Screen name="Authentications" component={Authentication} options={{ headerShown: false }} />
                        <RootStack.Screen name="Survey" component={Survey} options={{ headerShown: false }} />
                    </RootStack.Navigator>
                </NavigationContainer>
            </UserProvider>
        </AuthContextProvider>
    )
}

export default AppNavigation;
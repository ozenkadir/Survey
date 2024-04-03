import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, FONTS, METRICS, PADDING } from "../constants/theme"
import { LandingScreen } from "modules/landing/screens/LandingScreen";
import { ProfileScreen } from "modules/profile/screens/ProfileScreen";
import { SurveyOverviewScreen } from "modules/surveyOverview/screens/SurveyOverviewScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tab = createBottomTabNavigator<bottomNavigationParamList>();


interface customTabBarButtonProps {
    children: React.ReactNode; // Type for children
    onPress?: (event: GestureResponderEvent) => void; // Type for onPress function

}

const CustomTabBarButton = ({ children, onPress, }: customTabBarButtonProps) => (

    <TouchableOpacity
        style={{
            top: -15,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: METRICS.width(12),
                height: METRICS.width(12),
                borderRadius: 32,
                backgroundColor: COLORS.primaryColor  // Set background color based on the landing screen
            }}>
            {children}
        </View>

    </TouchableOpacity>
)

export type bottomNavigationParamList = {
    Landing: undefined,
    Anket: undefined,
    Profil: undefined
}

const BottomTabNavigation = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    borderRadius: 36,
                    backgroundColor: 'rgba(29,29,27,1)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: METRICS.height(8)
                }
            }}
        >
            <Tab.Screen name="Anket" component={SurveyOverviewScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ bottom: -12, gap: 4 }}>
                        <MaterialCommunityIcons name="chart-timeline-variant" size={METRICS.width(7)} color={focused ? 'rgba(149, 147, 255, 1)' : COLORS.whiteColor} />
                        <Text style={{ color: focused ? 'rgba(149, 147, 255, 1)' : COLORS.whiteColor, fontFamily: FONTS.family.weight.bold, fontSize: FONTS.size.s }}>Anket</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Landing" component={LandingScreen} options={{
                tabBarIcon: ({ focused }) => (<Entypo name="home" size={METRICS.width(7)} color={COLORS.whiteColor} />),
                tabBarButton: (props) => (
                    <CustomTabBarButton  {...props} />
                ),
            }} />

            <Tab.Screen name="Profil" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (

                    <View style={{ bottom: -12, gap: 4 }}>
                        <Ionicons name="person" size={METRICS.width(7)} color={focused ? 'rgba(149, 147, 255, 1)' : COLORS.whiteColor} />
                        <Text style={{ color: focused ? 'rgba(149, 147, 255, 1)' : COLORS.whiteColor, fontFamily: FONTS.family.weight.bold, fontSize: FONTS.size.s }}>Profil</Text>
                    </View>
                )
            }} />

        </Tab.Navigator>
    )
}
export default BottomTabNavigation;





import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {FONTS}  from "./constants/theme"
import AppNavigation from 'navigation/AppNavigation';


export default function App() {

  const [fontsLoaded] = useFonts({
    ComfortaaExtraBold: require("./assets/fonts/Comfortaa-Bold.ttf"),
    ComfortaaBold: require("./assets/fonts/Comfortaa-SemiBold.ttf"),
    ComfortaaMedium: require("./assets/fonts/Comfortaa-Medium.ttf"),
    ComfortaaRegular: require("./assets/fonts/Comfortaa-Regular.ttf"),
    ComfortaaLight: require("./assets/fonts/Comfortaa-Light.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <>
      <AppNavigation />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

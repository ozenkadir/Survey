import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/AppNavigation";

export const useAppNavigation = () =>{
   return useNavigation<NavigationProp<RootStackParamList>>();
}
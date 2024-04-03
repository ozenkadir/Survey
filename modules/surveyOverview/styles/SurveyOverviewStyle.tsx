import { StyleSheet } from "react-native";
import {METRICS} from "../../../constants/theme"

export const surveyOverviewScreenStyles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: 'rgba(255,255,255,0.85)', // Yarı saydam siyah renk
        alignItems:'center',
        justifyContent:'flex-start',
        gap: METRICS.width(5),
    },


})
import { StyleSheet } from "react-native";
import {METRICS} from "../../../constants/theme"

export const landingScreenStyles = StyleSheet.create({
    mainContainer: {
        height:METRICS.height(65),
        backgroundColor: 'rgba(255,255,255,0.85)', // Yarı saydam siyah renk
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute', // Mutlak konumlandırma kullanarak ImageBackground içinde yer alır
        bottom: 0, // Ekranın altına konumlandırır
        left: 0,
        right: 0,
        borderTopLeftRadius:36,
        borderTopRightRadius:36,
        gap:8,
        marginTop:30

    },
    imageView: {
        flex: 1,
        resizeMode: 'cover',
        gap:12    
    },

})
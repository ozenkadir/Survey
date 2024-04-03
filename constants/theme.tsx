import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const METRICS = {
    width: (percentage: number) => windowWidth * (percentage / 100),
    height: (percentage: number) => windowHeight * (percentage / 100),
  };

  export const COLORS = {

    baseColor: 'rgba(52, 25, 18, 1)',            
    primaryColor: 'rgba(-0, 0, 145, 1)', 
    whiteColor: 'rgba(255,255,255,1)',
    blackColor: 'rgba(0,0,0,1)',
    thumbBackground: 'rgba(177, 176, 255, 1)',     
    secondaryColor: 'rgba(255, 255, 255, 1)',    
    transparentColor: 'rgba(255, 255, 255, 0.0)',
    blurTransparentColor: 'rgba(255, 255, 255, 0.15)',
    cardBorderColor: 'rgba(201, 166, 104, 1)',
    placeHolderColor: 'rgba(255, 255, 255, 0.6)',
    appbarColor: 'rgba(52, 25, 18, 0.96)',


    greenButtonColor: 'rgba(37, 193, 51, 1)',
    darkGreenButtonColor: 'rgba(122, 188, 17, 1)',
    yellowButtonColor: 'rgba(227, 199, 0, 1)',
    orangeButtonColor: 'rgba(255, 139, 0, 1)',
    redButtonColor: 'rgba(255, 29, 37, 1)'


  
  };


  export const FONTS = {
    size: {
      xxl: windowWidth > 410 ? 26 : windowWidth > 380 ? 24 : 22,
      xl: windowWidth > 410 ? 22 : windowWidth > 380 ? 20 : 18,
      l: windowWidth > 410 ? 18 : windowWidth > 380 ? 16 : 14,
      m: windowWidth > 410 ? 15 : windowWidth > 380 ? 14 : 12,
      s: windowWidth > 410 ? 10 : windowWidth > 380 ? 11 : 8,
      xs: windowWidth > 410 ? 8 : windowWidth > 380 ? 9 : 7,
    },
    family: {
      weight:{
        bold: "ComfortaaExtraBold",
        semiBold: "ComfortaaBold",
        medium: "ComfortaaMedium",
        regular: "ComfortaaRegular",
        light: "ComfortaaLight",
      }
    }
  };



  export const PADDING = {
    xxxl: METRICS.width(14),
    xxl: METRICS.width(12),
    xl: METRICS.width(10),
    l: METRICS.width(6),
    m: METRICS.width(4),
    s: METRICS.width(3),
    xs: METRICS.width(2),
    xxs: METRICS.width(1),
  }
  
  export const MARGIN = {
    xxxl: METRICS.width(14),
    xxl: METRICS.width(12),
    xl: METRICS.width(10),
    l: METRICS.width(6),
    m: METRICS.width(4),
    s: METRICS.width(3),
    xs: METRICS.width(2),
    xxs: METRICS.width(1),
  }
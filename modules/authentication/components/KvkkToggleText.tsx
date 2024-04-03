import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';
import { COLORS, FONTS, MARGIN, METRICS, PADDING } from "../../../constants/theme";
import KvkkScreen from '../screens/KvkkScreen';

interface KvkkToggleTextProps {
    text:string
}


const KvkkToggleText = ({text}:KvkkToggleTextProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: COLORS.thumbBackground, true: COLORS.primaryColor}}
        thumbColor={COLORS.whiteColor}
        ios_backgroundColor="#B1B0FF"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={{width:METRICS.width(66),textAlign:'left'}}>{text}</Text>
    </View>
  );
};
export default KvkkToggleText;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width:METRICS.width(80),
    gap:14

  },

});
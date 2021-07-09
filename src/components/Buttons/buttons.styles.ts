import {StyleSheet} from 'react-native';
import {SEC_LIGHT_COLOR} from '@theme/colors';

export const styles = (color: string, textColor: string, disabled: boolean) =>
  StyleSheet.create({
    buttonContainer: {
      width: '100%',
      height: 50,
      backgroundColor: disabled ? SEC_LIGHT_COLOR : color,
      borderRadius: 8,
      marginTop: '3%',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    titleButton: {
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 24,
      color: textColor,
      fontFamily: 'AktivGroteskCorp-Medium',
      letterSpacing: 1,
    },
  });

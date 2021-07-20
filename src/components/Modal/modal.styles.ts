import {StyleSheet} from 'react-native';
import {PRI_COLOR, SEC_COLOR} from '@theme/colors';

export const modalStepper = StyleSheet.create({
  container: {
    width: '85%',
    height: 'auto',
    padding: 0,
    borderRadius: 10,
  },
  containerButtons: {
    flexDirection: 'row',
  },
  backColor: {
    backgroundColor: '#2b2a2ab8',
  },
  containerButtonLeft: {
    width: '50%',
    backgroundColor: PRI_COLOR,
    height: 40,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
  },
  containerButtonRight: {
    width: '50%',
    backgroundColor: SEC_COLOR,
    height: 40,
    justifyContent: 'center',
    borderBottomRightRadius: 10,
  },
  titleButton: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 18,
  },
});

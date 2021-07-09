import {StyleSheet} from 'react-native';
import {SEC_COLOR, PRI_COLOR} from '@theme/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    color: SEC_COLOR,
    height: 50,
    borderWidth: 2,
    width: '100%',
    borderRadius: 9,
    marginBottom: '2%',
    padding: 15,
    fontFamily: 'AktivGroteskCorp-Regular',
    borderColor: PRI_COLOR,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#d2d0cb',
    borderRadius: 4,
    color: '#242426',
    lineHeight: 24,
    fontWeight: '900',
    fontFamily: 'Lato',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#d2d0cb',
    borderRadius: 8,
    color: '#242426',
    lineHeight: 24,
    fontWeight: '900',
    fontFamily: 'Lato',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  subTitle: {
    marginTop: '1%',
    marginBottom: '1%',
    color: SEC_COLOR,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
});

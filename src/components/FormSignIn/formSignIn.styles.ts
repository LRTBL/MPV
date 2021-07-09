import {StyleSheet} from 'react-native';
import {SEC_COLOR} from '@theme/colors';

export const styles = StyleSheet.create({
  container: {padding: '5%'},
  imageContainer: {
    alignItems: 'center',
    marginBottom: '10%',
    marginTop: '10%',
  },
  image: {
    height: 150,
    width: 150,
  },
  forgotContainer: {
    marginTop: '4%',
    marginBottom: '6%',
  },
  forgotText: {
    fontSize: 15,
    textAlign: 'right',
    color: SEC_COLOR,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  signUpText: {
    fontSize: 15,
    color: SEC_COLOR,
    textAlign: 'center',
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  signUpContainer: {
    marginTop: '7%',
  },
});

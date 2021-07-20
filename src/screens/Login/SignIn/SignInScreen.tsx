import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import FormSignIn from '@components/FormSignIn';
import {PRI_COLOR} from '@theme/colors';
import stylesAuth from '@theme/index';

const SignInScreen = () => {
  return (
    <KeyboardAvoidingView
      style={stylesAuth.authKeyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={stylesAuth.authSectionContainer}>
        <FormSignIn />
      </View>
      <Text style={styles.versionApp}>1.0.1</Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  versionApp: {
    backgroundColor: '#f2f2f2',
    height: '5%',
    paddingRight: '5%',
    paddingLeft: '5%',
    textAlign: 'right',
    fontFamily: 'AktivGroteskCorp-Bold',
    color: PRI_COLOR,
  },
});

export default SignInScreen;

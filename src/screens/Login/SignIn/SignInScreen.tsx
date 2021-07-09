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

const SignInScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.sectionContainer}>
        <FormSignIn />
      </View>
      <Text style={styles.versionApp}>1.0.1</Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  versionApp: {
    backgroundColor: 'white',
    height: '5%',
    paddingRight: '5%',
    paddingLeft: '5%',
    textAlign: 'right',
    fontFamily: 'AktivGroteskCorp-Bold',
    color: PRI_COLOR,
  },
});

export default SignInScreen;

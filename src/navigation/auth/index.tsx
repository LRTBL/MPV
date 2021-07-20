import * as React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
  StackNavigationProp,
} from '@react-navigation/stack';

import SignInScreen from '@screens/Login/SignIn/SignInScreen';
import SignUp from './SignUp';

type AuthStackParamList = {
  SignIn: undefined;
  Register: undefined;
};

export type SignInProps = StackScreenProps<AuthStackParamList, 'SignIn'>;
export type SignInNavigation = StackNavigationProp<
  AuthStackParamList,
  'SignIn'
>;
export type RegisterProps = StackScreenProps<AuthStackParamList, 'Register'>;
export type RegisterNavigation = StackNavigationProp<
  AuthStackParamList,
  'Register'
>;

const {Screen, Navigator} = createStackNavigator<AuthStackParamList>();

const Auth = () => {
  return (
    <Navigator>
      <Screen
        name="SignIn"
        component={SignInScreen}
        options={{header: () => null}}
      />
      <Screen
        name="Register"
        component={SignUp}
        options={{header: () => null}}
      />
    </Navigator>
  );
};

export default Auth;

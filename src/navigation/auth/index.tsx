import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '@screens/Login/SignIn/SignInScreen';
import SignUp from './SignUp';

const {Screen, Navigator} = createStackNavigator();

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

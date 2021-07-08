import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const {Screen, Navigator} = createStackNavigator();

import SignUpScreen from '@screens/Login/SignUp/SignUpScreen';
import ReceiveCode from '@screens/Login/SignUp/ReceiveCode';

const Register = () => {
  return (
    <Navigator>
      <Screen
        name="SignUp"
        component={SignUpScreen}
        options={{header: () => null}}
      />
      <Screen
        name="ReceiveCode"
        component={ReceiveCode}
        options={{header: () => null}}
      />
    </Navigator>
  );
};

export default Register;

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';

import Auth from '@navigation/auth';
import SplashScreen from '@screens/SplashScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  const [isLoadingToken, setIsLoadingToken] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoadingToken(false);
    }, 2000);
  }, []);

  if (isLoadingToken) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

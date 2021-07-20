import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import Auth from '@navigation/auth';
import SplashScreen from '@screens/SplashScreen';
import {useAuth} from '@context/authContext';

import NewPaperWork from '@screens/NewPaperWork/NewPaperWork';
import PersonalData from 'screens/PersonalData/PersonalData';
import Tracing from '@screens/Tracing/Tracing';
import HomeScreen from '@screens/HomeScreen';
import DrawerComponent from '@components/Drawer/index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  const [isLoadingToken, setIsLoadingToken] = React.useState<boolean>(true);
  const {state} = useAuth();
  console.log('🚀 ~ file: index.tsx ~ line 15 ~ Navigation ~ state', state);

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
      {state.uid ? (
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <DrawerComponent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="PersonalData" component={PersonalData} />
          <Drawer.Screen name="NewPaperWork" component={NewPaperWork} />
          <Drawer.Screen name="Tracing" component={Tracing} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;

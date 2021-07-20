import React from 'react';
import Navigation from '@navigation/index';
import {AuthProvider} from '@context/authContext';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default App;

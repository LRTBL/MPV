import * as React from 'react';
import {authState} from '@states/authState';
import authReducer from '@reducers/authReducer';

type AuthContextState = {
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string | null;
};

const AuthContext = React.createContext<{
  state: AuthContextState;
  dispatch: React.Dispatch<any>;
}>({state: authState, dispatch: () => null});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = React.useReducer(authReducer, authState);
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('UseAuth must be used inside a AuthProvider');
  }
  return context;
};

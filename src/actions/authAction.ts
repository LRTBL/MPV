import auth from '@react-native-firebase/auth';
import {AuthDispatch} from '@reducers/authReducer';
import {FormSignInValues} from '@components/FormSignIn/index';
import {SIGN_IN, LOGOUT} from '@reducers/types/index';
import Toast from 'react-native-toast-message';

export const loginUser = (
  dispatch: AuthDispatch,
  setIsLoading: (value: boolean) => void,
  form: FormSignInValues,
) => {
  setIsLoading(true);
  auth()
    .signInWithEmailAndPassword(form.email, form.password)
    .then((res: any) => {
      setIsLoading(false);
      console.log('🚀 ~ file: index.tsx ~ line 48 ~ .then ~ res', res);
      const payload = {
        email: res.user.email,
        phoneNumber: res.user.phoneNumber,
        photoURL: res.user.photoURL,
        uid: res.user.uid,
      };
      dispatch({payload, type: SIGN_IN});
      Toast.show({
        text1: 'Bienvenido querido usuario 😀',
        type: 'success',
        position: 'bottom',
      });
    })
    .catch(() => {
      setIsLoading(false);
      Toast.show({
        text1: 'Contraseña o usuario inválido',
        type: 'error',
        position: 'bottom',
      });
    });
};

export const logOutUser = (dispatch: AuthDispatch) => {
  auth().signOut();
  dispatch({type: LOGOUT});
};

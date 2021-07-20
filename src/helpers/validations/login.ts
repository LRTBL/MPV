import {FormSignInValues, FormSignInErrorValues} from '@components/FormSignIn';

const onlyEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export const signInValidation = (
  form: FormSignInValues,
  errorForm: FormSignInErrorValues,
) => {
  let {emailError, passwordError} = errorForm;
  const {email, password} = form;
  if (email === '') {
    emailError = 'Ingrese email';
  } else if (!onlyEmail.test(email)) {
    emailError = 'Ingrese email valido';
  } else {
    emailError = '';
  }

  if (password === '') {
    passwordError = 'Ingrese contraseña';
  } else {
    passwordError = '';
  }
  if (
    emailError !== '' ||
    passwordError !== '' ||
    (passwordError !== '' && emailError !== '')
  ) {
    return {emailError, passwordError};
  } else {
    return false;
  }
};

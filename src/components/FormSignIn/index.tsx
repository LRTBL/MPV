import React from 'react';
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import {InputText, InputPassword} from '@components/Inputs';
import {ButtonForm} from '@components/Buttons';
import MessageError from '@components/MessageError';
import {useForm} from '@hooks/useForm';
import {useErrorForm} from '@hooks/useErrorForm';
import {signInValidation} from '@helpers/validations/login';
import {styles} from './formSignIn.styles';

export interface FormSignInValues {
  email: string;
  password: string;
}

export interface FormSignInErrorValues {
  emailError: string;
  passwordError: string;
}

const FormSignIn = () => {
  const {form, onReset, onChange} = useForm<FormSignInValues>({
    email: '',
    password: '',
  });

  const {errorForm, onChangeError, onResetError} =
    useErrorForm<FormSignInErrorValues>({
      emailError: '',
      passwordError: '',
    });

  const handleLogin = () => {
    const validationLogin = signInValidation(form, errorForm);
    if (validationLogin) {
      onChangeError(validationLogin);
    } else {
      onReset();
      onResetError();
      // loginUser(dispatchUi, dispatchAuth, form, handleOpen, navigator);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@assets/images/logo_ugel.png')}
          style={styles.image}
        />
      </View>
      <InputText
        label="E-mail"
        placeholder="Ingrese su e-mail"
        name="email"
        keyboardType="email-address"
        value={form.email}
        onChange={onChange}
      />
      {errorForm.emailError !== '' && (
        <MessageError text={errorForm.emailError} />
      )}
      <InputPassword
        label="Contraseña"
        placeholder="Ingrese su contraseña"
        name="password"
        value={form.password}
        onChange={onChange}
      />
      {errorForm.passwordError !== '' && (
        <MessageError text={errorForm.passwordError} />
      )}
      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>¿Olvídaste tu contraseña?</Text>
      </TouchableOpacity>
      <ButtonForm title="Ingresar" action={handleLogin} />
      <TouchableOpacity style={styles.signUpContainer}>
        <Text style={styles.signUpText}>¿No tienes cuenta? Registrate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FormSignIn;

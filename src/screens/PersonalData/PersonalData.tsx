import React from 'react';
import {View} from 'react-native';
import Header from '@components/Header';
import {InputText} from '@components/Inputs';
import {useForm} from '@hooks/useForm';

const PersonalData = () => {
  const {form, onReset, onChange} = useForm<FormSignInValues>({
    peterno: '',
    password: '',
  });
  return (
    <View>
      <Header title="Datos personales" />
      <View style={{padding: '5%'}}>
        <InputText
          label="Numero de documento"
          placeholder="Ingrese su N° documento"
          name="paterno"
          keyboardType="numeric"
          value={form.email}
          onChange={onChange}
        />
        <InputText
          label="Apellido paterno"
          placeholder="Ingrese su apellido paterno"
          name="paterno"
          value={form.email}
          onChange={onChange}
        />
        <InputText
          label="Apellido materno"
          placeholder="Ingrese su apellido materno"
          name="paterno"
          value={form.email}
          onChange={onChange}
        />
        <InputText
          label="Nombres"
          placeholder="Ingrese sus nombres"
          name="paterno"
          value={form.email}
          onChange={onChange}
        />
      </View>
    </View>
  );
};

export default PersonalData;

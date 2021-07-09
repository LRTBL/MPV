import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './inputs.styles';
import {InputAllProps} from '@typings/components';
import {PRI_COLOR, SEC_COLOR, SEC_LIGHT_COLOR} from '@theme/colors';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const InputText = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  editable = true,
  keyboardType = 'default',
}: InputAllProps.InputProps) => {
  return (
    <View>
      {label && <Text style={styles.subTitle}>{label}</Text>}
      <TextInput
        placeholderTextColor={SEC_LIGHT_COLOR}
        placeholder={placeholder}
        style={styles.inputContainer}
        editable={editable}
        keyboardType={keyboardType}
        onChangeText={v => onChange(v, name)}
        value={value}
      />
    </View>
  );
};

export const InputPassword = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  editable = true,
  keyboardType = 'default',
}: InputAllProps.InputProps) => {
  return (
    <View>
      <Text style={styles.subTitle}>{label}</Text>
      <TextInput
        placeholderTextColor={SEC_LIGHT_COLOR}
        placeholder={placeholder}
        style={styles.inputContainer}
        editable={editable}
        keyboardType={keyboardType}
        secureTextEntry={true}
        onChangeText={v => onChange(v, name)}
        value={value}
      />
    </View>
  );
};

export const InputSelect = ({
  label,
  data,
  value,
  onChange,
  name,
  disabled = false,
}: InputAllProps.InputSelectedProps) => {
  return (
    <View>
      <Text style={styles.subTitle}>{label}</Text>
      <RNPickerSelect
        style={styles}
        placeholder={{
          label: 'Seleccionar',
          value: null,
          color: SEC_COLOR,
        }}
        useNativeAndroidPickerStyle={false}
        value={value}
        onValueChange={v => onChange(v, name)}
        items={data}
        disabled={disabled}
      />
    </View>
  );
};

export const InputChexbox = ({
  selected,
  onPress,
  size = 30,
  color = PRI_COLOR,
  label = '',
  ...props
}: InputAllProps.InputChexbox) => {
  return (
    <TouchableOpacity style={[styles.checkBox]} onPress={onPress} {...props}>
      <Icon
        size={size}
        color={color}
        name={selected ? 'check-box' : 'check-box-outline-blank'}
      />
      <Text> {label} </Text>
    </TouchableOpacity>
  );
};

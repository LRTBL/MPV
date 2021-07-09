import React from 'react';
import {Text} from 'react-native';
import {styles} from './messageError.styles';

const MessageError = ({text}: {text: string}) => {
  return <Text style={styles.error}>{text}</Text>;
};

export default MessageError;

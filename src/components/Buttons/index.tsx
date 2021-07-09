import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';
import {PRI_COLOR} from '@theme/colors';
import {styles} from './buttons.styles';

interface ButtonProps {
  title: string;
  action: ((e: GestureResponderEvent) => void) | undefined;
  color?: string;
  textColor?: string;
  loadingColor?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const ButtonForm = ({
  title,
  action,
  color = PRI_COLOR,
  textColor = '#FFF',
  loadingColor = '#FFF',
  disabled = false,
  loading = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles(color, textColor, disabled).buttonContainer}
      onPress={action}>
      {loading ? (
        <ActivityIndicator color={loadingColor} size={25} />
      ) : (
        <Text style={styles(color, textColor, disabled).titleButton}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

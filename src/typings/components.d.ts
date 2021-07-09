import {GestureResponderEvent, KeyboardType} from 'react-native';
import {Item} from 'react-native-picker-select';

export namespace ButtonAllProps {
  export interface ButtonProps {
    title: string;
    action: ((e: GestureResponderEvent) => void) | undefined;
    color?: string;
    textColor?: string;
    loadingColor?: string;
    disabled?: boolean;
    loading?: boolean;
  }
}

export namespace InputAllProps {
  export interface InputProps {
    label: string;
    placeholder: string;
    name: string;
    value: string | undefined;
    onChange: (value: string, name: string) => void;
    editable?: boolean;
    keyboardType?: KeyboardType;
  }

  export interface InputSelectedProps extends InputProps {
    data: Item[];
    disabled: boolean;
  }

  export interface InputChexbox {
    selected: boolean;
    size: number;
    onPress: () => void;
    color: string;
    label: string;
  }
}

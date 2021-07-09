import React from 'react';

export const useForm = <T>(initialState: T) => {
  const [state, setState] = React.useState<T>(initialState);

  const onChange = (value: any, field: string) => {
    setState({...state, [field]: value});
  };

  const onReset = () => {
    setState(initialState);
  };

  return {form: state, onChange, onReset};
};

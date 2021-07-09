import React from 'react';

export const useErrorForm = <T>(initialState: T) => {
  const [state, setState] = React.useState<T>(initialState);

  const onChangeError = (newState: T) => {
    setState(newState);
  };

  const onResetError = () => {
    setState(initialState);
  };

  return {errorForm: state, onChangeError, onResetError};
};

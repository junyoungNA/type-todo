import { useState } from 'react';

export const useInputs = () => {
  const [inputs, setInputs] = useState({
    title: '',
    date: '',
    detail: '',
  });

  const onChangeInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return [inputs, setInputs, onChangeInput];
};

import { useState } from 'react';

type Inputs = { title: string; date: string; detail: string };

export const useInputs = (): any => {
  const [inputs, setInputs] = useState<Inputs>({
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

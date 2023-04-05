import autobind from 'autobind-decorator';
import React from 'react';
import indexStore from '../mobx/indexStore';

const Button: React.FC = () => {
  const { numberStore } = indexStore();

  const onClickCrease = () => {
    numberStore.increasseAction(1);
  };

  const onClickDecrease = () => {
    numberStore.decreaseAction(1);
  };

  return (
    <>
      <div>{numberStore.num}</div>
      <button onClick={onClickCrease}> 증가</button>
      <button onClick={onClickDecrease}> 감소</button>
    </>
  );
};

export default Button;

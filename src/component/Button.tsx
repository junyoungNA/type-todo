import React from 'react';
import indexStore from '../mobx/indexStore';
import { observer } from 'mobx-react';

const Button: React.FC<any> = observer(({ counter }) => {
  const onClickCrease = () => {
    counter.increasseAction(1);
  };

  const onClickDecrease = () => {
    counter.decreaseAction(1);
  };

  return (
    <>
      <div>{counter.num}</div>
      <button onClick={onClickCrease}> 증가</button>
      <button onClick={onClickDecrease}> 감소</button>
    </>
  );
});

export default Button;

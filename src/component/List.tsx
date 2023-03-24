import React from 'react';
import { ListTypes } from '../types';

const List: React.FC<ListTypes> = ({
  index,
  title,
  like,
  date,
  setIsModal,
  modalNum,
  onLike,
}) => {
  return (
    <div className="list">
      <h4>{title}</h4>
      <p>{date}</p>
      <span onClick={() => onLike(index)}>따봉! {like}</span>
      {modalNum !== index && (
        <button onClick={() => setIsModal(index)}>상세보기</button>
      )}
    </div>
  );
};

export default List;

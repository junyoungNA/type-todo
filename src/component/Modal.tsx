import { ModalTypes } from '../types';

const Modal: React.FC<ModalTypes> = ({
  index,
  title,
  date,
  detail,
  like,
  onLike,
  setIsModify,
  setInputs,
}) => {
  return (
    <div className="modal">
      <h4>{title}</h4>
      <p>{date}</p>
      <p>{detail}</p>
      <span
        onClick={() => {
          onLike(index);
        }}
      >
        좋아요 {like}
      </span>
      <button
        onClick={() => {
          setIsModify(true);
          // setInputs({ title, date, detail });
        }}
      >
        수정하기
      </button>
    </div>
  );
};

export default Modal;
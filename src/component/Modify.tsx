import { ModifyModalTypes } from '../types';

const ModifyModal: React.FC<ModifyModalTypes> = ({
  setIsModify,
  title,
  date,
  detail,
}) => {
  const onModify = () => {
    setIsModify(false);
  };

  const onCancleModify = () => {
    setIsModify(false);
  };
  return (
    <div className="modal">
      <input value={title} name="title" />
      <input value={date} name="date" />
      <textarea value={detail} name="detail" />
      <button>수정완료</button>
      <button onClick={onCancleModify}>수정취소</button>
    </div>
  );
};

export default ModifyModal;

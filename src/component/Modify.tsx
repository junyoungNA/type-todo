import { ModifyModalTypes } from '../types';

const ModifyModal: React.FC<ModifyModalTypes> = ({
  setIsModify,
  setPlace,
  title,
  date,
  detail,
  onChangeInput,
}) => {
  const onModify = () => {
    setPlace();
  };

  const onCancleModify = () => {
    setIsModify(false);
  };
  return (
    <div className="modal">
      <input value={title} name="title" onChange={onChangeInput} />
      <input value={date} name="date" onChange={onChangeInput} />
      <textarea value={detail} name="detail" onChange={onChangeInput} />
      <button>수정완료</button>
      <button onClick={onCancleModify}>수정취소</button>
    </div>
  );
};

export default ModifyModal;

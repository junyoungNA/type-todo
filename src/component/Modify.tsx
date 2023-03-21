import { ModifyModalTypes } from '../types';

const ModifyModal: React.FC<ModifyModalTypes> = ({
  setIsModify,
  setPlace,
  title,
  date,
  detail,
  place,
  like,
  modalNum,
  onChangeInput,
}) => {
  const onModify = () => {
    const copy = [...place];
    copy[modalNum] = {
      title,
      date,
      detail,
      like,
    };
    setPlace([...copy]);
    setIsModify(false);
  };

  const onCancleModify = () => {
    setIsModify(false);
  };
  return (
    <div className="modal">
      <input value={title} name="title" onChange={onChangeInput} />
      <input value={date} name="date" onChange={onChangeInput} />
      <textarea value={detail} name="detail" onChange={onChangeInput} />
      <button onClick={onModify}>수정완료</button>
      <button onClick={onCancleModify}>수정취소</button>
    </div>
  );
};

export default ModifyModal;

import { useCallback, useEffect, useState } from 'react';
import './assets/styles/body.scss';
import List from './component/List';
import Modal from './component/Modal';
import ModifyModal from './component/Modify';
import { useInputs } from './hooks/useInputs';

function App(): JSX.Element {
  const [place, setPlace] = useState([
    { title: '역곡 대창 맛집', date: '3월27일', like: 0, detail: '상세내용' },
    { title: '강남 우동 맛집', date: '2월 17일', like: 0, detail: '상세내용' },
    { title: '나주 국밥 맛집', date: '6월17일', like: 0, detail: '상세내용' },
  ]);
  const [modalNum, setModalNum] = useState(-1);
  const [isModify, setIsModify] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const [inputs, setInputs, onChangeInputs, clearInputs] = useInputs();
  const { title, date, detail } = inputs;

  useEffect(() => {
    if (modalNum === -1) {
      clearInputs();
      return;
    }
    setInputs({
      title: place[modalNum].title,
      date: place[modalNum].date,
      detail: place[modalNum].detail,
    });
  }, [modalNum, isModify]);

  const onLike = useCallback(
    (index: number): void => {
      const copy = [...place];
      copy[index].like += 1;
      setPlace([...copy]);
    },
    [place]
  );

  const onSort = (): void => {
    setPlace([...place.sort((a, b) => a.title.localeCompare(b.title))]);
  };

  const onIsAdd = (): void => {
    setModalNum(-1);
    setIsModify(false);
    setIsAdd(true);
  };

  const onAdd = (): void => {
    const newData = { title, date, detail, like: 0 };
    setPlace([...place, newData]);
    setIsAdd(false);
  };

  const onDelete = (index: number): void => {
    const copyData = [...place];
    copyData.splice(index, 1);
    setPlace([...copyData]);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={onSort}>정렬</button>
      <button onClick={onIsAdd}>추가</button>
      {place.map((item, index) => (
        <List
          key={index}
          index={index}
          title={item.title}
          date={item.date}
          like={item.like}
          onLike={onLike}
          modalNum={modalNum}
          setIsModal={setModalNum}
        />
      ))}
      {modalNum !== -1 && (
        <Modal
          index={modalNum}
          title={place[modalNum].title}
          detail={place[modalNum].detail}
          date={place[modalNum].date}
          like={place[modalNum].like}
          onLike={onLike}
          setIsModify={setIsModify}
          setIsAdd={setIsAdd}
          onDelete={onDelete}
        />
      )}
      {isModify && (
        <ModifyModal
          setIsModify={setIsModify}
          setPlace={setPlace}
          title={title}
          detail={detail}
          date={date}
          like={place[modalNum].like}
          place={place}
          modalNum={modalNum}
          onChangeInput={onChangeInputs}
        />
      )}
      {isAdd && (
        <div className="modal">
          <input value={title} name="title" onChange={onChangeInputs} />
          <input value={date} name="date" onChange={onChangeInputs} />
          <textarea value={detail} name="detail" onChange={onChangeInputs} />
          <button onClick={onAdd}>완료</button>
          <button onClick={() => setIsAdd(false)}>취소</button>
        </div>
      )}
    </div>
  );
}

export default App;

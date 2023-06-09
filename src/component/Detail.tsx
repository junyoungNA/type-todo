import { useParams } from 'react-router-dom';
import data from '../data';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Tab from '../component/Tab';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
const ColorBtn = styled.button`
  background: ${props => (props.color === 'blue' ? 'white' : 'black')};
  color: ${props => (props.color === 'blue' ? 'white' : 'black')};
  padding: 10px;
`;

const BlackBox = styled.div`
  background: grey;
  padding: 20px;
`;

const WarningBox = styled.div`
  background: red;
  width: 250px;
  margin: 10px 0 10px 0;
  height: 25px;
`;

const Detail: React.FC = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const id = Number(param.id);
  const [buyNum, setBuyNum] = useState('0');
  const [isWarning, setWarning] = useState(false);
  // const [isHide, setHide] = useState(false);
  const [fade, setFade] = useState('');
  const [tab, setTab] = useState(0);
  const shoes = data.find(item => {
    return item.id === id;
  });

  const onBuyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (Number(e.target.value)) {
      setWarning(false);
      return setBuyNum(e.target.value);
    }
    setWarning(true);
  };

  useEffect(() => {
    // const timeId = setTimeout(() => {
    //   setHide(true);
    // }, 2000);
    // return () => {
    //   clearTimeout(timeId);
    // };
    const watched: any = localStorage.getItem('watched');
    console.log(JSON.parse(watched));
    const current = [...JSON.parse(watched), id];
    console.log(current);
    localStorage.setItem('watched', JSON.stringify(current));
    setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      setFade('');
    };
  }, [id]);

  return (
    <div className={'container start ' + fade}>
      {/* {!isHide && (
        <BlackBox>
          <ColorBtn color="blue" />
        </BlackBox>
      )} */}
      <div className="row">
        <div className="col-md-6">
          <img
            // src={process.env.PUBLIC_URL + `./img/shoes1.jpeg`}
            src={`../img/shoes${id + 1}.jpeg`}
            alt="신발 사진"
            width="100%"
          />
        </div>

        <div className="col-md-6">
          {shoes ? (
            <>
              <h4 className="pt-5">{shoes.title}</h4>
              <p>{data[id].content}</p>
              <p>{data[id].price}</p>
              {isWarning && <WarningBox>숫자만 적어주세요</WarningBox>}
              <input type="number" onChange={onBuyChange} value={buyNum} />
              <button
                className="btn btn-danger"
                onClick={() => {
                  console.log(data[id]);
                  dispatch(addItem({ ...data[id], count: Number(buyNum) }));
                }}
              >
                주문하기
              </button>
            </>
          ) : (
            <div>해당 상품이 없습니다</div>
          )}
        </div>
      </div>
      <Tab tab={tab} setTab={setTab} />
    </div>
  );
};

export default Detail;

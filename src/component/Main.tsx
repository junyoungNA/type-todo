import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Shoes from './Shoes';
import { useEffect, useState } from 'react';
import data from '../data';
import '../App.css';
import axios from 'axios';
import styled from 'styled-components';
import Button from './Button';
import NumberStore from '../mobx/numberStore';
const Store = new NumberStore();

const MoreBtn = styled.button`
  width: 200px;
  height: 30px;
`;

const Main: React.FC = () => {
  const [shoes, setShoes] = useState(data);
  const [clickNum, setClickNum] = useState(0);

  useEffect(() => {
    const watched = localStorage.getItem('watched');
    if (watched === null) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);

  const onMoreShoes = (): void => {
    setClickNum(clickNum + 1);
    if (clickNum === 0) {
      axios
        .get(`https://codingapple1.github.io/shop/data2.json`)
        .then(res => {
          console.log(res);
          const newData = [...shoes, ...res.data];
          console.log(newData);
          setShoes(newData);
        })
        .catch(err => {
          alert(err);
        });
    } else if (clickNum === 1) {
      axios
        .get(`https://codingapple1.github.io/shop/data3.json`)
        .then(res => {
          console.log(res);
          const newData = [...shoes, ...res.data];
          console.log(newData);
          setShoes(newData);
        })
        .catch(err => {
          alert(err);
        });
    }
  };

  return (
    <div className="App">
      <div className="main-bg"></div>
      <Container className="main-container">
        {shoes.map(item => {
          const url = `/detail/${item.id}`;
          return (
            <Link key={item.id} to={{ pathname: url }}>
              <Shoes shoes={item} />
            </Link>
          );
        })}
        {clickNum < 2 && (
          <MoreBtn className="more-btn" onClick={onMoreShoes}>
            더보기
          </MoreBtn>
        )}
      </Container>
      <Button counter={Store} />
    </div>
  );
};

export default Main;

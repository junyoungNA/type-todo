import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Shoes from './Shoes';
import { useEffect, useState } from 'react';
import data from '../data';
import '../App.css';
import { ShoesTypes } from '../types';
import axios from 'axios';

const Main: React.FC = () => {
  useEffect(() => {
    axios
      .get(`https://codingapple1.github.io/shop/data2.json`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        alert(err);
      });
  });
  const [shoes, setShoew] = useState(data);
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
      </Container>
    </div>
  );
};

export default Main;

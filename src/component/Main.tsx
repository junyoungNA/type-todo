import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Shoes from './Shoes';
import { useState } from 'react';
import data from '../data';
import '../App.css';
import { ShoesTypes } from '../types';

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [shoes, setShoew] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <Button variant="primary">Primary</Button>
      </Navbar>
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

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from './data';
import Shoes from './component/Shoes';
import './App.css';

export default function App(): JSX.Element {
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
      {shoes.map(item => {
        <Shoes shoes={item} />;
      })}
    </div>
  );
}

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" onClick={() => navigate('/')}>
            Home
          </Nav.Link>
          <Nav.Link href="#features" onClick={() => navigate('/cart')}>
            Cart
          </Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
      <Button variant="primary">Primary</Button>
    </Navbar>
  );
};

export default Header;

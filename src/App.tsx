import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shoes1 from './img/shoes1.jpeg';
import './App.css';

export default function App(): JSX.Element {
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
        <Row className="main-row">
          <Col className="main-col">
            <img
              src={process.env.PUBLIC_URL + './img/shoes1.jpeg'}
              alt=""
              className="main-img"
            />
            <h4>상품</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + './img/shoes2.jpeg'}
              alt=""
              className="main-img"
            />
            <h4>상품</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            {' '}
            <img
              src={process.env.PUBLIC_URL + './img/shoes3.jpeg'}
              alt=""
              className="main-img"
            />
            <h4>상품</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

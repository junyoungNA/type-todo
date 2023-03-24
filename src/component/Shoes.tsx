import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ShoesTypes } from '../types';

const Shoes: React.FC<ShoesTypes> = ({ shoes }) => {
  return (
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
  );
};

export default Shoes;

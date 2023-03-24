import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ShoesTypes } from '../types';

const Shoes: React.FC<ShoesTypes> = ({ shoes }) => {
  return (
    <Row className="main-row">
      <Col className="main-col">
        <img
          src={process.env.PUBLIC_URL + `./img/shoes${shoes.id + 1}.jpeg`}
          alt=""
          className="main-img"
        />
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
      </Col>
    </Row>
  );
};

export default Shoes;

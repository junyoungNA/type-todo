import { useParams } from 'react-router-dom';
import data from '../data';

const Detail: React.FC = () => {
  const param = useParams();
  const id = Number(param.id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + `./img/shoes${id + 1}.jpeg`}
            alt="신발 사진"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{data[id].title}</h4>
          <p>{data[id].content}</p>
          <p>{data[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

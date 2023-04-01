import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount } from '../redux/cartSlice';

const Cart: React.FC = () => {
  const result: any = useSelector((state: any) => {
    return state.userData;
  });

  const dispatch = useDispatch();

  console.log(result);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {result.map((item: any) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>
              <button
                onClick={() => {
                  dispatch(changeCount(item.id));
                }}
              >
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Cart;

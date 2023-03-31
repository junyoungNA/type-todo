import { Route, Routes, Link } from 'react-router-dom';
import Main from '../component/Main';
import Detail from '../component/Detail';
import Layout from './Layout';
import Cart from '../component/Cart';

const Router = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>이거 404 페이지요</div>} />
      </Routes>
    </Layout>
  );
};

export default Router;

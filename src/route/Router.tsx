import { Route, Routes, Link } from 'react-router-dom';

import Main from '../component/Main';
import Detail from '../component/Detail';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="*" element={<div>이거 404 페이지요</div>} />
    </Routes>
  );
};

export default Router;

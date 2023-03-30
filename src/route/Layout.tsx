import React from 'react';
import Header from '../component/Header';
// 풋터 추가해야함!

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      {/* 풋터 */}
    </>
  );
};

export default Layout;

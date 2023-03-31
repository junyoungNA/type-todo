import { TabTypes } from '../types';
import Nav from 'react-bootstrap/Nav';

const Tab: React.FC<TabTypes> = ({ tab, setTab }) => {
  return (
    <>
      <Nav defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setTab(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setTab(1);
            }}
          >
            Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setTab(2);
            }}
          >
            Link
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </>
  );
};

export default Tab;

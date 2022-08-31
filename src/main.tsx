import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import Divider from './components/Divider';
import Paragraph from './components/Paragraph';
// import 'web2/style.css';
// import { Button } from 'web2';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Paragraph
      title='港式海鲜酒家的经典菜肴之一, 龙虾伊面'
      text='**鲜美的龙虾**，经过上汤烹调。置于伊面之上，~鲜美汤汁流入其中~。即使~~是最朴素的~~蛋面，也充斥着龙虾的鲜香。仅需$29.00！即可享受美食的快乐！
        鲜美的龙虾，经过上汤烹调。置于伊面之上，鲜美汤汁流入其中。即使是最'
      expandedBtn="收起来"
    />
    <br />
    <br />
    <Divider />
  </React.StrictMode>,
);

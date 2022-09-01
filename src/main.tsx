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
      text='https://cdn.sayweee.net/common/image/378/629/70E07A14FD6626F8.gif'
    />
    <br />
    <br />
    <Divider />
  </React.StrictMode>,
);

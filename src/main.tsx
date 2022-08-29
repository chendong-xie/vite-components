import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import 'web2/style.css';
import { Button } from 'web2';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Button size='large' block>
      test
    </Button>
  </React.StrictMode>,
);

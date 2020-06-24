import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Contacts from './pages/contacts';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Contacts />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

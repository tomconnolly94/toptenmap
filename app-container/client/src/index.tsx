import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import IndexPage from './pages/IndexPage/IndexPage';

// grab this from the environment
var devHost = "http://localhost:80"

ReactDOM.render(
   <React.StrictMode>
      <IndexPage host={devHost}/>
   </React.StrictMode>,
   document.getElementById('root')
);
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';

import SplashHeader from './components/SplashHeader/SplashHeader';
import SearchTool from './components/SearchTool/SearchTool';

// grab this from the environment
var devHost = "http://localhost:80"

ReactDOM.render(
   <React.StrictMode>
      <SplashHeader host={devHost}/>
      <SearchTool/>
   </React.StrictMode>,
   document.getElementById('root')
);
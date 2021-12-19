import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
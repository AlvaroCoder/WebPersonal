import React from 'react';
import {render} from 'react-dom';
import App from './App';

import "./Styles/Home.css";
import "./Styles/About.css";
import "./Styles/Projects.css";
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



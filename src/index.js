import React from 'react';
import {render} from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Assets/Home.css"
import "./Assets/Articulos.css"
import "./Assets/Pomodoro.css"
import "./Assets/ArticulosPage.css"

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

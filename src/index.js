import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoConteiner from "./compoents/TodoConteiner";
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <TodoConteiner />
  </React.StrictMode>,
  document.getElementById('root')
);



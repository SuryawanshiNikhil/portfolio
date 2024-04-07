import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './Apps';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  
  <BrowserRouter><Apps/></BrowserRouter>,
  document.getElementById('root')
)
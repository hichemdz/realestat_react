import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

/*______________ Start _________________*/

const url = 'https://realastats.herokuapp.com/'
const url2 = 'http://localhost/deploy';

axios.defaults.withCredentials = true;

axios.defaults.baseURL = url2;

axios.defaults.headers.common['Authorization'] = 'bearer' + localStorage.getItem('token');

axios.defaults.headers['Content-Type'] = 'application/json';

/*______________ End _________________*/


ReactDOM.render(
  <React.StrictMode>
    <Router>
     <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

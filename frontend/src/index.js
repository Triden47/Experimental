import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <div className="background-img"></div>
    <App />
  </div>,
  document.getElementById('root')
);

reportWebVitals();

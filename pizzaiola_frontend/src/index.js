import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/vendor/ionicons/css/ionicons.min.css' ;
import './assets/vendor/animate.css/animate.min.css' ;
import './assets/vendor/font-awesome/css/font-awesome.min.css' ;
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css' ;
import './assets/css/style.css' ; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

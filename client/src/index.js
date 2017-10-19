import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();


import Menu from './components/Menu'
import data from './components/data'
ReactDOM.render(<Menu recipes={data} />, document.getElementById("react-container"))
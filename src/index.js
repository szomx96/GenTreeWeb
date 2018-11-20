import React from 'react';
import './index.css';
import App from './App.js';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

 
render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

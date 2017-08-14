import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import * as firebase from 'firebase';
import ENV from './config/env';


firebase.initializeApp(ENV.firebase);
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

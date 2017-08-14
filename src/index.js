import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBShv-qt7tff_tV-F7CM7yf_M4fM2L5ga8",
    authDomain: "alkanza-42921.firebaseapp.com",
    databaseURL: "https://alkanza-42921.firebaseio.com",
    projectId: "alkanza-42921",
    storageBucket: "alkanza-42921.appspot.com",
    messagingSenderId: "61743825794"
  };
firebase.initializeApp(config);
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

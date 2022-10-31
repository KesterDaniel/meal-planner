import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import './index.css';
import App from './components/App';
import {configureStore} from "@reduxjs/toolkit"
import calendar from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({reducer:calendar})


ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
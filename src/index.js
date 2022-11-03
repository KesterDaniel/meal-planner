import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import './index.css';
import App from './components/App';
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./reducers"
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({reducer:rootReducer})
console.log(store.getState())


ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
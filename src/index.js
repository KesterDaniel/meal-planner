import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from "@reduxjs/toolkit"
import calendar from "./reducers/index"

const store = configureStore(
    {reducer: calendar}
)


ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();

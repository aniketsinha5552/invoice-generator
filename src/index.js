import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux"
import { store } from './redux/store/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
       <App />
    </Provider>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

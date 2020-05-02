import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/appReducer';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk), window.REDUX_DEVTOOLS_EXTENSION
  ? window.REDUX_DEVTOOLS_EXTENSION()
  : f => f
))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    	<App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();

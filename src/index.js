import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import applyMiddleware from './middleware';

let store = createStore(reducer, applyMiddleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

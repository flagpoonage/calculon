import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initializeRuler  } from './svg/ruler';
import ReactDOM from 'react-dom';
import App from './components/app';
import React from 'react';
import RootReducer from './reducer';
import WindowResize from './resize';

let appStore = null;

const initializeReactApp = () => {
  appStore = createStore(RootReducer, {
    window: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    toolbar: {
      width: 300
    },
    mode: {
      key: 'NAVIGATE'
    },
    elements: []
  });


  ReactDOM.render(
    <Provider store={appStore}>
      <App />
    </Provider>,
    document.getElementById('content'));
};

const documentResizeHandler = () => {
  appStore.dispatch({
    type: 'SET_WINDOW_SIZE',
    width: window.innerWidth,
    height: window.innerHeight + 600
  });
};

const documentReadyHandler = () => {
  initializeRuler();
  initializeReactApp();
};

window.addEventListener(WindowResize, documentResizeHandler);
document.addEventListener('DOMContentLoaded', documentReadyHandler);

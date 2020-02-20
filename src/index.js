import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { stateReducer } from './reducers';

const store = createStore(stateReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

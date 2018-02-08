import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers';

import { watchDataAdd } from './sagas/weather'

import './index.css';
import App from './App';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watchDataAdd)

const action = type => store.dispatch({type})

ReactDOM.render(
	<Provider store={store}>
		<App />
  </Provider>, document.getElementById('root')
);

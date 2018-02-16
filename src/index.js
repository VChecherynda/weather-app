import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers';

import rootSaga from './sagas'

import './index.css';
import App from './App';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
	<Provider store={store}>
		<App />
  </Provider>, document.getElementById('root')
);

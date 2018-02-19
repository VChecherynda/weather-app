import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import rootSaga from './sagas'

import App from './App';
import Login from './views/Login';
import About from './views/About';

import './index.css';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </Provider>, document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function forecast(state=[], action) {
  if(action.type === 'ADD_TRACK') {
  	return [
	  ...state,
	  action.payload
  	];
  }
  return state;
}

const store = createStore(forecast);

store.subscribe(() => {
	console.log('subscribe', store.getState());
});

store.dispatch({type: 'ADD_TRACK', payload: 'Smels like spirit'});
store.dispatch({type: 'ADD_TRACK', payload: 'Enter Sandman'});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

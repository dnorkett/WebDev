import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';


//STORE - globalized state


//ACTION - describes what you want to do
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER - describes how actions transforms state into next state
//initial state of counter, action
const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;  
    case 'DECREMENT' :
      return state - 1;
  }
};

let store = createStore(counter);

//display in console
store.subscribe(() => console.log(store.getState()));

//DISPATCH - executes action
store.dispatch(increment());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();

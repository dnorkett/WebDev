import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>hello</h1>
      <p> Counter: {counter} </p>
      <button onClick={() => dispatch(increment(5))}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>


      {isLogged ? <p>SECRET INFO</p> : ''}      
    </div>
  );
}

export default App;

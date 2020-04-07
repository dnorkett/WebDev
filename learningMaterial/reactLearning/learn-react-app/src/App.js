//Component
//File that holds logic. Self contained piece of code
//Always begin by importing React
import React, {useState} from 'react'; 
import Tweet from './Tweet';


function App() {

  //State, some data. App renders itself based on that data
  const [isRed, setRed] = useState(false);     //first array value is name, second is a function to change name.
  
  const [count, setCount] = useState(0);
  const increment = () => {
    setRed(!isRed);
    setCount(count + 1);
  }

  return (
    <div className='app'>
      <button onClick={increment}>Increment</button>      
      <h1>{count}</h1>

      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>

      <Tweet name="Dev ED" message="This is a random tweet"/>
      <Tweet name="Dev Don" message="This is another random tweet"/>
      <Tweet name="Mosh" message="This is yet another random tweet"/>
      <Tweet name="Rando" message="This is a random tweet too"/>
      
    </div>
  )
}

//exports this file
export default App
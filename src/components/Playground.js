/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React,{useState} from "react";


function Playground(props){
  const [count,setCount]=useState(0)
  const [spinnerOn,setSpinnerOn]=useState(false)

  // when spinnerOn===true, only return <div className='container'></div>
  if(spinnerOn){
    return(
      <div className="container">
        <h3>This spinner is On</h3>
        <button onClick={() => { setSpinnerOn(false) }}>turn spinner off</button>
      </div>
    )
  }
  
 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Increment</button>
      <button onClick={() => { setCount(count - 1) }}>Decrement</button>
      <h3>The spinner is {spinnerOn?'On':'OFF'}</h3>
      <button onClick={()=>{setSpinnerOn(!spinnerOn)}}>Toggle</button>

    </div>
    
  )
}

export default Playground;

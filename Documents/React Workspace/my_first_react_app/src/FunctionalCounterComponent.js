import React, { useState } from 'react'

/*

Hooks are used to update value at dynamic

useState is a method takes intial value of variable

useState returns one variable,setter method

useState is usen for functional component

*/
function FunctionalCounterComponent() 
{
    let [counter,setCounter]=useState(0)


    const updateCounter=()=>
    {
        setCounter(counter+1)
    }
  return (

    <div>
        <h1>Use State By Functional Component</h1>
        <p>Counter: {counter}</p>
        <input type="button" value="Update Counter" onClick={updateCounter}/>
    </div>
  )
}

export default FunctionalCounterComponent //deafult export so it can be in any name
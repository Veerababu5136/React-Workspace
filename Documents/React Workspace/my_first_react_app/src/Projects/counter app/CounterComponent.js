import React, { useState } from 'react'

import './style.css'
function CounterComponent() 
{

    let [counter,setCounter]=useState(0)

    let stock=10

    const inc=()=>
    {
        if(stock!=counter)
        {
        
        setCounter(counter+1)
        }
        else
        {
            alert('cannot inc')
        }
    }

    const dec=()=>
    {
        if(counter!=0)
        {
        setCounter(counter-1)
        }
        else
        {
            alert('cannot dec')

        }
    }

  return(
    <div>
       <h1>Counter project</h1>

       <input type="button" value="+" id="plus" onClick={inc}/>
       <span>{counter}</span>
       <input type="button" value="-" id="minus" onClick={dec}/>

    </div>
  )
}

export default CounterComponent
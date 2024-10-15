
import Buttons  from './Buttons'
import React, { useState } from 'react'

/*

This is the calculator using react js

In this i taken calcultor component,

1. handleclick,clear,eval i taken as array of functions

2. created Buttons.js and passed props(here functions as props)

3. And This calculator component imported in app(main component file)



*/



function CalculatorComponent()
{

    let [userInput,setInput]=useState("")

    const arrayOfFunctions=[

        function handleClick(input)
        {
            setInput(userInput + input) //concantation................
        },

        function handleClear()
        {
            setInput("")
        },
    
        function handleEval()
        {
            setInput(eval(userInput))
        }

    ]
   

   

    return(
        <div>
            <h1>Calculator Using React</h1>
            <input type="text" id="display" value={userInput}/>
            <Buttons handleClick={arrayOfFunctions[0]} handleClear={arrayOfFunctions[1]} handleEval={arrayOfFunctions[2]}/>
        </div>
    )
}


export default CalculatorComponent
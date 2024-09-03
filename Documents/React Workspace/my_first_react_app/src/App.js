import React, { useState } from 'react'

import First from './components' // deafault export can be any name while importing

import { firstFunc2 as F} from './components' // named export, can be imported in same name while exporting,but name can changed using as (alias)

import UserComponent, {User2 as UserComponent2} from './User' //child component

import FunctionalCounter from './FunctionalCounterComponent'

import ClassCounter from './ClassCounter'

import CounterProject from './Projects/counter app/CounterComponent'

import ToDoProject from './Projects/ToDoList/ToDoListComponent'

import Calculator from './Projects/Calculator app/CalculatorComponent'

import FakeApiComponent from './Projects/FakeApi/FakeApiComponent'

import MenuBar from './Components/MenuBar/MenuBar'

import MenuBar2 from './Components/MenuBar2/MenuBar'


function App() 
{

  let [counter,updateCounter]=useState(0)

  return (
    <div>
    
       {/* <First></First>   */}  {/* functional component */}
       
       {/*  <F></F>           */}

       {/* <UserComponent name='Amrutha Pavani' age='21'></UserComponent> */} {/*  parent componet calling child User with passing args*/} 

       {/* <UserComponent2 name='Sowjanya' age='22'></UserComponent2> */}{/*  parent componet calling child User2/class component with passing args*/}
    
   {/* <FunctionalCounter></FunctionalCounter> */}

  {/*   <ClassCounter></ClassCounter> */}

    {/*<CounterProject></CounterProject>*/}
    
    {/*<ToDoProject></ToDoProject> */}

    {/*<Calculator></Calculator>*/}

    {/*<FakeApiComponent></FakeApiComponent>*/}

    {/*<MenuBar></MenuBar>*/}

    <MenuBar2></MenuBar2>

   </div>
  )
}



export default App

import React, { useState } from 'react';
import './style.css';

function ToDoListComponent() 
{

    let value=0

   const addTask=()=>
   {
    let taskValue = String(document.getElementById('task').value);

    if(taskValue==="")
    {
        alert("please fill task")
        
    }
    else{

    updateToDoList(
        [
            ...todolists,
            {
                id:todolists.length+1,
                task:taskValue
            }
        ]
    )
}
   }


  
  

   const deleteTask=(id)=>
   {
    
    updateToDoList(todolists.filter(
        (todolist)=>
        {
            return(
            todolist.id!==id
            )
        }
    ))
   }
    
    let [todolists, updateToDoList] = useState(
        [
            {
                id: 1,
                task: "hi veera"
            }
        ]
    );

    return (
        <div className="todo-container">
            <h1 className="todo-header">To-do List</h1>

            <input type="text" id="task" placeholder="Enter your task here" className="todo-input"/><br/>

            <button id="addTask" className="todo-button" onClick={addTask}>Add task</button>




            <div className="todo-list">
                {
                    todolists.map((todolist) => {
                        return (
                            <div key={todolist.id} className="todo-item">{todolist.id}&nbsp;{todolist.task} 
                            


                            <button id="delete" onClick={()=>{deleteTask(todolist.id)}}>Delete</button>
                            
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ToDoListComponent;

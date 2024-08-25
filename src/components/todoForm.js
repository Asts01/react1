import React, { useState } from 'react';
import { Todo } from './todo';

//jha pre trigger krte h ,vha bheja jata h as parameter
export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const handleSubmit=e=>{
    e.preventDefault();//prevent the default loading of the page
    // console.log(value);//should hold the value inside the text-input-box
    addTodo(value);//pass this task to the parent state widget->todoWrapper
    setValue("");//clear the controller's value once button is triggered
  }

  return (
    <>
    <form className="todoForm" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value}
        className="todoInput"  // Corrected from class to className
        placeholder="schedule a new task 📋" 
        onChange={(e) => setValue(e.target.value)}  // e is now defined correctly
      />
      <button class ="submitTaskButton" type="submit">Add Task</button>
    </form>
    {/* generate todo for each value in the state */}
    {/* <Todo></Todo> */}
    </>
  );
};
//to pass the task from todoForm to todoWrapper well use props
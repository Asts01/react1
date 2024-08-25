import React, { useState } from 'react';
import { Todo } from './todo';

//jha pre trigger krte h ,vha bheja jata h as parameter
export const EditTodoForm = ({editTask,task}) => {
  const [value, setValue] = useState("");
  const handleSubmit=e=>{
    e.preventDefault();//prevent the default loading of the page
    // console.log(value);//should hold the value inside the text-input-box
    editTask(value,task.id);//pass this task to the parent state widget->todoWrapper
    setValue("");//clear the controller's value once button is triggered
    task=value;
    //reset isEditing to false from true and now task will be changed
  }
  return (
    <>
    <form className="editTodoForm" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value}
        className="todoInput"  // Corrected from class to className
        placeholder="edit the task ...📝" 
        onChange={(e) => setValue(e.target.value)}  // e is now defined correctly
      />
      <div></div>
      <button className="editTaskButton" type="submit">Edit Task</button>
    </form>
    </>
  );
};
//to pass the task from todoForm to todoWrapper well use props
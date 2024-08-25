import React from 'react';
import { MdEdit, MdDelete, MdDone } from 'react-icons/md'; // Import MdDone for the checkmark icon

export const Todo = ({ task, toggleComplete,deleteTodo,editTodo }) => {
  return (
    <div className="todo">
      {/* Checkmark icon to indicate completion */}
      
      <p 
        onClick={() => toggleComplete(task.id)} 
        className={`${task.completed ? 'completed' : 'todoText'}`}
      >
        <>{"✅"}</>
        {/* <>{<MdDone />}</>  */}
        <> {task.task}</>
      </p>
      
      {/* Icons for edit and delete */}
      <div className="icons">
        <MdEdit onClick={()=>editTodo(task.id)} />
        <MdDelete onClick={() => deleteTodo(task.id)} />
    </div>

    </div>
  );
};
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from './todoForm';
import { Todo } from './todo';
import { EditTodoForm } from './editTodoForm';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    const editTask = (newTaskValue, id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? (
                { ...todo, task: newTaskValue, isEditing: false }
            ) : todo
        ));
    };

    return (
        <div className="TodoWrapper">
            <h1 className="todoWrapperHeading">Todo List Application🎯</h1>
            <TodoForm addTodo={addTodo} />
            {
                todos.map((todo) => (
                    todo.isEditing ? (
                        <EditTodoForm 
                            editTask={editTask} // Ensure this prop matches in EditTodoForm
                            task={todo}
                            key={todo.id} // Use id as key
                        />
                    ) : (
                        <Todo 
                            task={todo} 
                            key={todo.id} // Use id as key
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    )
                ))
            }
        </div>
    );
};

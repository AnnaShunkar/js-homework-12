import React from "react";
import { useState } from "react"; 
import ToDoListComponent from "./ToDoListComponent";
 
const ToDoComponent = () => {
    const [input, setInput] = useState('');
    const [toDo, setToDo] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };      
    const handleAddToDo = () => {
        const todoElement = [...toDo, input];
        setToDo(todoElement);
        setInput("");
    };
    const handleKeyDown = (e) => { 
        if (e.key === 'Enter') {
            handleAddToDo();
        }
    }

    return (
        <div className="todo-container">
             <h1>To Do List</h1>
            <p>ToDo items: {toDo.length}</p>
            <label>Enter new item:</label>
            <input value={input} onChange={handleChange} onKeyDown={handleKeyDown}></input>
            <ul>
                {toDo.map((item, name) => (
                    <ToDoListComponent key={item.id} newElement={item.name} />
                ))}
            </ul>
            <button type="button" onClick={handleAddToDo}>Add new To Do</button>
</div>
    )
};
export default ToDoComponent;

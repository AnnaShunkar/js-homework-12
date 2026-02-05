import React from "react";
import { useState } from "react"; 
import ToDoListComponent from "./ToDoListComponent";
import ButtonComponent from "./ButtonComponent";
 
const ToDoComponent = () => {
    const initailToDo = [
        { id: 1, name: 'Learn React' },
        { id: 2, name: 'Build a ToDo App' },
        { id: 3, name: 'Profit!' }];

    const [input, setInput] = useState('');
    const [toDo, setToDo] = useState(initailToDo);

    const handleChange = (e) => {
        setInput(e.target.value);
    };      
    const handleAddToDo = () => {
        const todoElement = [...toDo, { id: toDo.length + 1, name: input }];
        setToDo(todoElement);
        setInput("");
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddToDo();
        }
    };
    const handleDelete = (id) => {
        setToDo(prev => prev.filter(item => item.id !== id));
    }

    return (
        <div className="todo-container">
             <h1>To Do List</h1>
            <p>ToDo items: {toDo.length}</p>
            <label>Enter new item:</label>
            <input value={input} onChange={handleChange} onKeyDown={handleKeyDown}></input>
            <ul>
                {toDo.map((element) => (
                    <ToDoListComponent key={element.id} id={element.id} name={element.name}>
                        <ButtonComponent type={"button"} text={"Delete"} onClick={() => handleDelete(element.id)} />
                    </ToDoListComponent>
                ))}
            </ul>
            <button type="button" onClick={handleAddToDo}>Add new To Do</button>
</div>
    )
};
export default ToDoComponent;

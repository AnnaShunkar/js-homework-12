import React from "react";
import { useId, useState } from "react";

const ToDoArray = () => {
    const [id, setId] = useId();
    const [completed, setCompleted] = useState({});
    const ToDoArr = [
        { id: 1, name: 'Buy groceries' },
        { id: 2, name: 'Walk the dog' },
        { id: 3, name: 'Read a book' },
        { id: 4, name: 'Write code' },
    ];
    
    const handleCheckboxChange = (itemId) => {
        setCompleted({
            ...completed,
            [itemId]: !completed[itemId],
        });
    };
    return (
        <>
            {ToDoArr.map((item) => (
                <li key={item.id}>
                    <span style={{ display: completed[item.id] ? "none" : 'block', flex: 1 }}>
                        {item.name}
                    </span>
                    <input
                        type="checkbox"
                        checked={completed[item.id] || false}
                        onChange={() => handleCheckboxChange(item.id)}
                    />
                </li>
            ))}
        </>
    );
};
export default ToDoArray;
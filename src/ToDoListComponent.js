import React from "react";

const ToDoListComponent = (props) => {
    return (
        <div className="list">
            <li key={props.id}>{props.name}</li>
            {props.children}
        </div>
    )
};

export default ToDoListComponent;
import React from "react";
import styles from "./ToDoList.module.css"

const ToDoListComponent = (props) => {
    return (
        <div className= {styles.list}>
            <li key={props.id}>{props.name}</li>
            {props.children}
        </div>
    )
};

export default ToDoListComponent;
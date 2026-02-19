import React from "react";
import styles from "./ToDoList.module.css";

const ToDoListComponent = (props) => {
  return (
    <div className={styles.list}>
      <li
        key={props.id}
        style={{
          textDecoration: props.completed ? "line-through" : "none",
          color: props.completed ? "gray" : "black",
        }}
      >
        <input
          type="checkbox"
          checked={props.completed}
          onChange={() => props.onToggle(props.id)}
        />
        <span className="span">{props.name}</span>
      </li>

      {props.children}
    </div>
  );
};

export default ToDoListComponent;

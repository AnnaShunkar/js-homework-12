import React from "react";
import styles from "./css/ToDoList.module.css"

const ButtonComponent = (props) => {
    return <button className={styles.button} type={props.type} onClick={props.onClick}>
        {props.text}
    </button>;
};
export default ButtonComponent;
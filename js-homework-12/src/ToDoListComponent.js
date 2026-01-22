import React from "react";
import { useState } from "react";

const ToDoListComponent = ({ newElement }) => {
    return (
        <div className="list">
            <li>{newElement}</li>
            <input type="checkbox"></input>
        </div>
    )
};

export default ToDoListComponent;
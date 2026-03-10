import React, { useState, useEffect } from "react";
import ToDoListComponent from "./ToDoListComponent";
import ButtonComponent from "./ButtonComponent";
import EditButtonComponent from "./EditButtonComponent";
import styles from "./css/ToDo.module.css";
import { getTodos, addTodo, deleteTodo, updateTodo } from "./api/api";


const ToDoComponent = () => {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [toDo, setToDo] = useState([]);
  const [editId, setEditId] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodos();
        setToDo(data);
        console.log("get done", data);
      } catch (error) {
        console.error("Loading error:", error);
      }
    };
    fetchData();
  }, []);

  const MIN = 3;
  const MAX = 20;

  const handleChange = (e) => setInput(e.target.value);

  const handleAddToDo = async () => {
    const clean = input.trim();
    if (clean.length < MIN) {
      setError(`Minimum number of characters: ${MIN}`);
      return;
    }
    if (clean.length > MAX) {
      setError(`Maximum number of characters: ${MAX}`);
      return;
    }
    setError("");

    const newTodo = { name: clean, completed: false };
    try {
      const savedTodo = await addTodo(newTodo);
      setToDo([...toDo, savedTodo]);
      console.log("post done", savedTodo);
      setInput("");
    } catch (error) {
      console.error("Error while adding:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setToDo((prev) => prev.filter((item) => item.id !== id));
      console.log("delete done", id);
    } catch (error) {
      console.error("Error while deleting:", error);
    }
  };

  const handleToggle = async (id) => {
      try {
    const todo = toDo.find((item) => item.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };

    const result = await updateTodo(id, updatedTodo);

    setToDo((prev) =>
      prev.map((item) => (item.id === id ? result : item))
    );

    console.log("PUT done", result);
  } catch (error) {
    console.error("Error while updating:", error);
  }

  };

  const filteredTodo = toDo
    .filter((item) => {
      if (filter === "active") return !item.completed;
      if (filter === "completed") return item.completed;
      return true;
    })
    .filter((item) => item.name?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={styles.todo}>
      <h1 className={styles.h1}>To Do List</h1>
      <p className={styles.items}>ToDo items: {filteredTodo.length}</p>

      <label className={styles.label}>Enter new item:</label>
      <input
        value={input}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && handleAddToDo()}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "10px" }}>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Search: </label>
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul>
        {filteredTodo.map((element) => (
          <ToDoListComponent
            key={element.id}
            id={element.id}
            name={element.name}
            completed={element.completed}
            onToggle={handleToggle}
          >
            <ButtonComponent
              type="button"
              text="Delete"
              onClick={() => handleDelete(element.id)}
            />
            <ButtonComponent
              type="button"
              text="Edit"
              onClick={() => setEditId(element.id)}
            />
          </ToDoListComponent>
        ))}
      </ul>

      <button
        className={styles.deleteButton}
        type="button"
        onClick={handleAddToDo}
      >
        Add new To Do
      </button>

      {editId && (
        <EditButtonComponent
          id={editId}
          onClose={() => setEditId(null)} 
          onUpdate={(updated) =>
            setToDo(toDo.map((t) => (t.id === updated.id ? updated : t)))
          }
        />
      )}
    </div>
  );
};

export default ToDoComponent;
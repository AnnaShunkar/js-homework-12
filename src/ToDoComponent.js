import React, { useState } from "react";
import ToDoListComponent from "./ToDoListComponent";
import ButtonComponent from "./ButtonComponent";
import styles from "./ToDo.module.css";

const ToDoComponent = () => {
  const initialToDo = [
    { id: 1, name: "Learn React", completed: false },
    { id: 2, name: "Build a ToDo App", completed: false },
    { id: 3, name: "Profit!", completed: false },
  ];

  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState(initialToDo);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const MIN = 3;
  const MAX = 20;

  
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  
  const handleAddToDo = () => {
    const clean = input.trim();

    if (clean.length < MIN) {
      setError(`Мінімальна кількість символів: ${MIN}`);
      return;
    }
    if (clean.length > MAX) {
      setError(`Максимальна кількість символів: ${MAX}`);
      return;
    }
    setError("");

    const newTodo = { id: Date.now(), name: clean, completed: false };
    setToDo([...toDo, newTodo]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddToDo();
  };

  
  const handleDelete = (id) => {
    setToDo((prev) => prev.filter((item) => item.id !== id));
  };

  
  const handleToggle = (id) => {
    setToDo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const filteredTodo = toDo
    .filter((item) => {
      if (filter === "active") return !item.completed;
      if (filter === "completed") return item.completed;
      return true;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className={styles.todo}>
      <h1 className={styles.h1}>To Do List</h1>
      <p className={styles.items}>ToDo items: {filteredTodo.length}</p>

      <label className={styles.label}>Enter new item:</label>
      <input
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "10px" }}>
        <label>Фільтр: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Всі</option>
          <option value="active">Активні</option>
          <option value="completed">Завершені</option>
        </select>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Пошук: </label>
        <input
          type="text"
          value={search}
          placeholder="Пошук..."
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
    </div>
  );
};

export default ToDoComponent;

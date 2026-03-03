import React, { useState, useEffect } from "react";
import { getTodoById, updateTodo } from "./api/api";
import styles from "./ToDo.module.css";

const EditTodoComponent = ({ id, onClose, onUpdate }) => {
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const todo = await getTodoById(id);
        setName(todo.name || "");
        setCompleted(todo.completed || false);
        console.log("GET single todo done", todo);
      } catch (err) {
        setError("Помилка при отриманні todo");
      }
    };
    fetchTodo();
  }, [id]);

  const handleSave = async () => {
    const payload = { name, completed };
    try {
      const updated = await updateTodo(id, payload);
      console.log("PUT done", updated);
      onUpdate(updated); 
      onClose();       
    } catch (err) {
      setError("Помилка при збереженні");
    }
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3>Редагувати todo</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          placeholder="Назва"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label style={{ display: "block", marginTop: "10px" }}>
          Виконана:
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label>
        <div style={{ marginTop: "10px" }}>
          <button className={styles.deleteButton} onClick={handleSave}>
            Зберегти
          </button>
          <button className={styles.deleteButton} onClick={onClose}>
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoComponent;
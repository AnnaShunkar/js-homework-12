import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, createTodo, removeTodo, toggleTodo } from "./features/todos/todosSlice";
import ToDoListComponent from "./ToDoListComponent";
import ButtonComponent from "./ButtonComponent";
import EditButtonComponent from "./EditButtonComponent";
import styles from "./css/ToDo.module.css";

const ToDoComponent = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.todos);

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const MIN = 3;
  const MAX = 20;

  const handleAddToDo = () => {
    const clean = input.trim();
    if (clean.length < MIN) return alert(`Minimum ${MIN} chars`);
    if (clean.length > MAX) return alert(`Maximum ${MAX} chars`);

    const newTodo = { name: clean, completed: false };
    dispatch(createTodo(newTodo));
    setInput("");
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    const todo = items.find((t) => t.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };
    dispatch(toggleTodo({ id, updatedTodo }));
  };

  const filteredTodo = items
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

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddToDo()}
      />

      <button
        className={styles.deleteButton}
        type="button"
        onClick={handleAddToDo}
      >
        Add new To Do
      </button>

      {status === "loading" && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
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
            <ButtonComponent text="Delete" onClick={() => handleDelete(element.id)} />
            <ButtonComponent text="Edit" onClick={() => setEditId(element.id)} />
          </ToDoListComponent>
        ))}
      </ul>

      {editId && (
        <EditButtonComponent
          id={editId}
          onClose={() => setEditId(null)}
          onUpdate={(updated) =>
            dispatch(toggleTodo({ id: updated.id, updatedTodo: updated }))
          }
        />
      )}
    </div>
  );
};

export default ToDoComponent;
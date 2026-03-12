import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";

export const fetchTodos = async () => {
  const res = await axios.get('/todos');
  return res.data;
};

export const addTodo = async (todo) => {
  const res = await axios.post("/todos", todo);
  return res.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`/todos/${id}`);
};

export const updateTodo = async (id, updatedTodo) => {
  const res = await axios.put(`/todos/${id}`, updatedTodo);
  return res.data;
};

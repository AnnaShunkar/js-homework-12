import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";

export const getTodos = async () => {
  const response = await axios.get("/todos");
  return response.data;
};

export const addTodo = async (payload) => {
  const response = await axios.post("/todos", payload);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`/todos/${id}`);
  return id;
};

export const updateTodo = async (id, payload) => {
  const response = await axios.put(`/todos/${id}`, payload);
  return response.data;
};
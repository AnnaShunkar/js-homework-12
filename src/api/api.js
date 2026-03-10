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
export const getTodoById = async (id) => {
  const response = await axios.get(`/todos/${id}`);
  return response.data;
};
export const getAuthStatus = async () => {
  const res = await axios.get("/auth/1");
  return res.data.isAuthenticated;
};

export const loginUser = async (username, email) => {
  await axios.patch("/auth/1", {
    username,
    email,
    isAuthenticated: true
  })
};
export const logoutUser = async () => {
  await axios.patch("/auth/1", { isAuthenticated: false });
};




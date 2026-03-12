import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "./todosApi";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  return await fetchTodos();
});

export const createTodo = createAsyncThunk("todos/createTodo", async (newTodo) => {
  return await addTodo(newTodo);
});

export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
  await deleteTodo(id);
  return id;
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async ({ id, updatedTodo }) => {
  return await updateTodo(id, updatedTodo);
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.items = state.items.map((t) =>
          t.id === action.payload.id ? action.payload : t
        );
      })
  },
});

export default todosSlice.reducer;
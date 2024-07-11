import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todoList",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todos) => todos !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;

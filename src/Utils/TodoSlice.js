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
      state.todos.pop();
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;

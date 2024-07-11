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
      state.todos = state.todos.filter((todo) => todo !== action.payload);
    },
    updateTodo: (state, action) => {
      const { oldTodo, newTodo } = action.payload;
      const index = state.todos.indexOf(oldTodo);
      if (index !== -1) {
        state.todos[index] = newTodo;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;

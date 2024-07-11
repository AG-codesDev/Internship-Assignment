import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Utils/TodoSlice";

const TaskList = () => {
  const todos = useSelector((store) => store.todoList.todos);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo));
  };

  const handleEditBtn = (todo) => {
    setEditMode(todo);
    setCurrentTodo(todo);
  };

  const handleSave = (todo) => {
    dispatch(updateTodo({ oldTodo: todo, newTodo: currentTodo }));
    setEditMode(null);
    setCurrentTodo("");
  };

  return (
    <div className="task-lists flex flex-col items-center gap-4">
      {todos.map((todo, i) => (
        <div
          className="individualTask bg-slate-200 shadow-lg flex p-3 items-center rounded-md justify-between w-[90%]"
          key={i}
        >
          {editMode === todo ? (
            <input
              type="text"
              value={currentTodo}
              onChange={(e) => setCurrentTodo(e.target.value)}
              className="font-medium font-sans text-lg p-1 rounded-md"
            />
          ) : (
            <span className="font-medium font-sans text-lg">{todo}</span>
          )}
          <div className="flex gap-5">
            {editMode === todo ? (
              <button
                className="bg-green-600 text-white rounded-md"
                onClick={() => handleSave(todo)}
              >
                <span className="flex items-center gap-2 p-1">
                  <span>Save</span>
                </span>
              </button>
            ) : (
              <button
                className="bg-blue-600 text-white rounded-md"
                onClick={() => handleEditBtn(todo)}
              >
                <span className="flex items-center gap-2 p-1">
                  <span>Edit</span>
                  <span>
                    <MdEdit />
                  </span>
                </span>
              </button>
            )}

            <button
              className="bg-red-600 text-white rounded-md"
              onClick={() => handleDelete(todo)}
            >
              <span className="flex items-center gap-2 p-1">
                <span>Delete</span>
                <span>
                  <MdDelete />
                </span>
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../Utils/TodoSlice";

const TaskList = () => {
  const todos = useSelector((store) => store.todoList.todos);
  const dispatch = useDispatch();
  // console.log(todos);

  const handleDelete = (todo) => {
    // console.log("delete clicked");
    // dispatch(deleteTodo());
    // console.log(todo);
    dispatch(deleteTodo(todo));
  };
  return (
    <div className="task-lists flex flex-col items-center gap-4">
      {todos.map((todo, i) => (
        <div
          className="individualTask bg-slate-200 shadow-lg flex p-3 items-center rounded-md justify-between w-[90%]"
          key={i}
        >
          <span className="font-medium font-sans text-lg">{todo}</span>
          <div className="flex gap-5">
            <button className="bg-blue-600 text-white rounded-md">
              <span className="flex items-center gap-2 p-1">
                <span>Edit</span>{" "}
                <span>
                  <MdEdit />
                </span>
              </span>
            </button>
            <button
              className="bg-red-600 text-white rounded-md"
              onClick={() => handleDelete(todo)}
            >
              <span className="flex items-center gap-2 p-1">
                <span>Delete</span>{" "}
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

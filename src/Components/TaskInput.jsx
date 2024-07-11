import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Utils/TodoSlice";

const TaskInput = () => {
  const [taskName, setTaskName] = useState("");

  const inputElement = useRef(null);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    // console.log("handle clicked");
    console.log(inputElement.current.value);
    dispatch(addTodo(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo(inputElement.current.value));
      inputElement.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-2 justify-center">
      <div className="inputBox w-4/5">
        <input
          type="text"
          className="border-2 rounded-md p-2 focus:outline-none w-full shadow-md"
          placeholder="Enter a Task"
          ref={inputElement}
          onKeyDown={(e) => handleEnterPress(e)}
        />
      </div>
      <div className="addBtn">
        <button
          className="bg-green-500 shadow-lg text-white font-semibold p-2 rounded-md hover:bg-green-600 transition-all"
          onClick={handleAddClick}
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default TaskInput;

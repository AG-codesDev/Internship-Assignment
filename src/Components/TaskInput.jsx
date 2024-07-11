import React from "react";

const TaskInput = () => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <div className="inputBox w-4/5">
        <input
          type="text"
          className="border-2 rounded-md p-2 focus:outline-none w-full border-gray-400"
          placeholder="Enter a Task"
        />
      </div>
      <div className="addBtn">
        <button className="bg-green-500 text-white font-semibold p-2 rounded-md">
          Add +
        </button>
      </div>
    </div>
  );
};

export default TaskInput;

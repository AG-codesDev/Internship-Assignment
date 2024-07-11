import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TaskList = () => {
  return (
    <div className="task-lists flex flex-col items-center gap-4">
      <div className="individualTask bg-slate-200 shadow-lg flex p-3 items-center rounded-md justify-between w-[90%]">
        <span className="font-medium font-sans text-lg">Watching Cricket</span>
        <div className="flex gap-5">
          <button className="bg-blue-600 text-white rounded-md">
            <span className="flex items-center gap-2 p-1">
              <span>Edit</span>{" "}
              <span>
                <MdEdit />
              </span>
            </span>
          </button>
          <button className="bg-red-600 text-white rounded-md">
            <span className="flex items-center gap-2 p-1">
              <span>Delete</span>{" "}
              <span>
                <MdDelete />
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;

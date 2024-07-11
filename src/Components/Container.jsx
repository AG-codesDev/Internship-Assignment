import React from "react";
import TaskInput from "./TaskInput";

const Container = () => {
  return (
    <div className="bg-white h-[70%] w-1/3 shadow-xl flex flex-col gap-5 rounded-md">
      <h1 className="text-center p-2 text-2xl font-bold font-sans">Todo App</h1>
      <TaskInput />
    </div>
  );
};

export default Container;

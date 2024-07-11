import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Container = () => {
  return (
    <div className="bg-white h-[70%] w-1/3 shadow-xl flex flex-col gap-5 rounded-md">
      <h1 className="text-center p-2 text-2xl font-bold font-sans">Todo App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Container;

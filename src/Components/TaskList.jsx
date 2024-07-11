import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Utils/TodoSlice";

const TaskList = () => {
  const todos = useSelector((store) => store.todoList.todos);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);
  const [currentTodo, setCurrentTodo] = useState("");

  // handle delete is there to handle delete click. when 'delete' button is clicked, it will dispatch an action with 'todoname' as parameter which then will be handled inside redux store. In redux store, the array will be filtered and array will be updated with newer value in which there will not be the item on which delete was clicked

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo));
  };

  // when handle delete is clicked, it will be matched to todoname, if name matches then that particular todo will be set to edit mode and there will be option to edit the text, current todo name will be updated as user types using useState variable
  const handleEditBtn = (todo) => {
    setEditMode(todo);
    setCurrentTodo(todo);
  };

  // save button will dispatch an action with an object containing old todo and newtodo which will be handled in redux store. edit mode will be set to null so that the option to change text disappears & edit button appears once again
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
          <input type="checkbox" name="" id="" className="h-5 w-5" />
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
                className="bg-green-600 text-white rounded-md shadow-lg"
                onClick={() => handleSave(todo)}
              >
                <span className="flex items-center gap-2 p-1">
                  <span>Save</span>
                </span>
              </button>
            ) : (
              <button
                className="bg-blue-600 text-white rounded-md shadow-lg"
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
              className="bg-red-600 text-white rounded-md shadow-lg"
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

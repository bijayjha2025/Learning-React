
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center m-5">
      {todos.map((todo, index) => (
        <div key={todo.id} className="flex items-center justify-center mb-2">
            <span className="mr-2">{todo.text}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))} className="bg-red-500 text-white rounded-md p-2">Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
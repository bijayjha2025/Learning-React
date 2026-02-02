
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={todo.id}>
            <span>{todo.text}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
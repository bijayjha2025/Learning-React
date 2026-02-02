import React from "react";
import { useDispatch } from "react-redux";
import { addTodo} from '../features/todo/todoSlice';

function AddToDo() {
    const [input, setInput] = React.useState("");
    const dispatch = useDispatch();

    const addToDoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }


  return (
    <div className="flex items-center justify-center m-5">
      <form onSubmit={addToDoHandler} >
        <input type="text" placeholder="Add To Do" className="border border-gray-300 rounded-md p-2" value={input} onChange={(e) => setInput(e.target.value)}>
        </input>

        
        <button type="submit" className="ml-2 bg-amber-500 text-white rounded-md p-2">Add To Do</button>

        </form>
    </div>
  );
}

export default AddToDo;
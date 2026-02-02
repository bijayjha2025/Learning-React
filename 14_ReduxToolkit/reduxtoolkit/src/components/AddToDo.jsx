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
    <div>
      <form onSubmit={addToDoHandler}>
        <input type="text" placeholder="Add To Do" style={{marginTop: "20px"}} value={input} onChange={(e) => setInput(e.target.value)}>

        </input>

        <button type="submit">Add To Do</button>

        </form>
    </div>
  );
}

export default AddToDo;
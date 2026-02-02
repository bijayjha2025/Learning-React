import AddToDo from "./components/AddToDo"
import Todo from "./components/Todo"

function App() {

  return (
    <>
      <h1 className="text-center m-5 font-bold text-amber-500">Today, I am learning Redux Toolkit</h1>
      <AddToDo />

      <div className="text-left m-5 p-5">
       <Todo />
      </div>
    </>
  )
}

export default App


import { AppProvider } from "./AppProvider";
import Profile from "./Profile";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>My Global State App</h1>
        <Profile /> 
      </div>
    </AppProvider>
  );
}

export default App;
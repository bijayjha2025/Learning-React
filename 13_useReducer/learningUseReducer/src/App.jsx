import './index.css';

import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'subtract':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='mainContainer'>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'add' })} className='buttons'>+</button>
      <button onClick={() => dispatch({ type: 'subtract' })} className='buttons'>-</button>
    </div>
  );
} 

export default App;
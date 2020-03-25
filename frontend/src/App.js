import React, {useState} from 'react';
import Header from './Header';

function App() {
  const [counter,setCounter] = useState(0)
  const increment = () => setCounter(prev=>prev+=1)
  return (
    <div>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1)
    }, 5000);
  })

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>PING-PONG</h1>
        {count}
      </header>
    </div>
  );
}

export default App;

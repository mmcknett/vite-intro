import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Turn from './Turn';

function App() {
  const [count, setCount] = useState(0)

  const getText = () => 'Click on the Vite and React logos to learn more!';

  return (
    <div className="App">
      <h1>Vordle</h1>
      <h2>Example</h2>
      <p>
        <span style={{ color: "green" }}>A</span>UDIO <br/>
        <span style={{ color: "green" }}>A</span>NGL<span style={{ color: "yellow" }}>E</span> <br/>
        ...<br/>
        <span style={{ color: "green" }}>AMBER</span><br/>
        <Turn guess="ANGLE" referenceWord='AMBER' />
      </p>
      <div className="card">
        <input type="text" />
        <button onClick={ () => {}}>Guess</button>
      </div>
      <p className="read-the-docs">
        { getText() }
      </p>
    </div>
  )
}

export default App

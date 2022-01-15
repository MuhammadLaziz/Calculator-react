import './App.css';
import Calculator from './components/Calculator';

import {useState} from 'react'

function App() {
  const [showCalc, setCalc] = useState(false)
  return (
    <div>
      <button className='btn' onClick={() => setCalc(!showCalc)}>Show Calculator</button>
      {showCalc ? <Calculator /> : null}
    </div>
  );
}

export default App;

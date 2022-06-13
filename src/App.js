import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  //by default it contain current object to 1, eg. {current: 1}
  const  inputRef = useRef(1);
  
  function focus() {
    inputRef.current.focus()
  }

  return (
    <>
    <h1>Welcome!!</h1>
    <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)}/>
    <p>my name is {name}</p>
    <button onClick={focus} >Focus</button>
    </>
  );
}

export default App;

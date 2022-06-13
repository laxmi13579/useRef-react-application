import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  //by default it contain current object to 1, eg. {current: 1}
  const countRender = useRef(1);
  useEffect(()=>{
    countRender.current = countRender.current + 1;
  })
  return (
    <>
    <h1>Welcome!!</h1>
    <input  value={name} onChange={(e)=>setName(e.target.value)}/>
    <p>my name is {name}</p>
    <p>render count {countRender.current}</p>
    </>
  );
}

export default App;

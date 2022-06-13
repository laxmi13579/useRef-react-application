import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  //by default it contain current object to 1, eg. {current: 1}
  const  prevValue = useRef();
  console.log('name',name)
  console.log('prevValue',prevValue.current)
  useEffect(()=>{
    prevValue.current = name;
  },[name])

  return (
    <>
    <h1>Welcome!!</h1>
    <input  value={name} onChange={(e)=>setName(e.target.value)}/>
    <p>my name is {name}</p>
    <p>prev state value is {prevValue.current} </p>
    </>
  );
}

export default App;

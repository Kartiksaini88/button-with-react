import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import ADD from "./component/component.jsx"
import Add3 from "./component/component"
function App() {
  let [counter , setcounter] = useState(0)

 
  const add_minus = (value)=>{
   
   setcounter(counter + value)
   
  }

  const multi = (value)=>{
   setcounter(counter*value)
  }
  
  const prop = (value)=>{
    setcounter(counter+value)
  }

  return (
    <div className="App">
      <h3 className={counter % 2 !==0 ? "green" : "red"}>Counter : {counter}</h3>
      <Add3 add={()=>{add_minus(1)}}minus={()=>{add_minus(-1)}}multiply={()=>{multi(2)}}></Add3>
    </div>
  );
}

export default App;

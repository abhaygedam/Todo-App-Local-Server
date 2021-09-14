import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Counter from './component/Counter';
import Todos from './component/Todos';

function App() {
 // const [show, setShow] = useState(false);
 
  // const [counter, setCounter] = useState(0);
  // const [age, setAge] = useState(21);

  // console.log("before");

  // useEffect(() => {
  //   console.log("empty Array")
  // },[]);

  // useEffect(() => {
  //   console.log("Watching for counter ... ")
  // }, [counter]);
  
  // useEffect(() => {
  //   console.log("watching for age")
  // }, [age]);

  // console.log("after");


  return (
    <div className="App">
      {/* <h1>Count is :- {counter}</h1>
       <h1>Age is :- {age}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>
        Add 1
      </button>

      <button onClick={() => {
        setAge(Math.random(Math.random()))
      }}>
        Ramdom
      </button> */}

      {/* {
        show ? (
          <>
            <Counter />
            <button onClick={() => {
              setShow(false);
            }}>
              Hide
            </button >
       
          </>) : (<>
           <button onClick={() => {
              setShow(true);
            }}>
              Show Counter
            </button >
          </>)
      } */}



      <Todos/>
   </div>  
  )
}

export default App;

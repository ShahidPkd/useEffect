import React, { useEffect, useState } from "react";

// useEffect is use to do something after component executions or we can say that
// this will call after render method called and executed.

const App = () =>{
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  // useEffect (()=>{
  //   alert("clicked");
  // })
  // this will call after useState change and after render method called.

  useEffect (()=>{
    alert("clicked");
  }, [num])

  // this will call only for first state change

  return (
    <>
      <button onClick={() =>{
        setNum(num+1);
      }} > Click {num}</button>
      <button onClick={()=>{
        setNums(nums+1);
      }} > click {nums}</button>
    </>
  );

}


export default App;

import React from 'react';
import './App.css'
import Buttonone from './Buttonone'

const App = () => {
  const myClickEvent = () => {
    console.log("點了一下");

  }
  return (
    <>
      <p onClick={myClickEvent}>這是我第一個函數組件App</p>
      <a href="https://google.com" onClick={(e) => { e.preventDefault(); }}>Google</a>
      <Buttonone props={{ a: 1 }} p1={{ b: 2 }} p2={{ c: 3 }}></Buttonone>
    </>
  )
}

export default App;
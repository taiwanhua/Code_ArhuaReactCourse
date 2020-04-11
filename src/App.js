import React, { useState } from 'react';
import './App.css'
import Buttonone from './Buttonone'

const App = () => {
  const [Count, setCount] = useState(0);

  return (
    <>
      <p >這是我第一個函數組件App</p>
      <button onClick={() => { setCount(Count + 1) }}>APP組件自己的按紐</button>
      <div>APP組件自己的按紐，按了 : {Count}次</div>
      <div style={{ backgroundColor: Count > 0 ? "green" : "red" }}>按了變色</div>
    </>
  )
}

export default App;
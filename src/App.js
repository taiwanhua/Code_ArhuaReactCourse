import React, { useState } from 'react';
import './App.css'
import Buttonone from './Buttonone'

const App = () => {
  const [Count, setCount] = useState(0);

  return (
    <>
      <p >這是我第一個函數組件App</p>
      <div>Count : {Count}</div>
      <Buttonone a={(x) => { setCount(x) }}></Buttonone>
    </>
  )
}

export default App;
import React, { useState } from 'react';
import './App.css'
import Buttonone from './Buttonone'
import Buttontwo from './Buttontwo';
import { Context } from './store'

const App = () => {
  const [Count, setCount] = useState(0);

  return (
    <>
      <p >這是我第一個函數組件App</p>
      <Context.Provider value={{ Count, setCount }}>
        <Buttonone></Buttonone>
        <Buttontwo></Buttontwo>
      </Context.Provider>
    </>
  )
}

export default App;
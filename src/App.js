import React, { useState, useReducer } from 'react';
import './App.css'
import Buttonone from './Buttonone'
import Buttontwo from './Buttontwo';
import { Context } from './store'

const reducer = (state, action) => {

  switch (action.type) {
    case "加":
      return state + action.payload;
    case "減":
      return state - action.payload;
    case "歸零":
      return 0;
    default:
      return "處理失敗";
  }
}

const App = () => {
  const [Count, setCount] = useReducer(reducer, 0);

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
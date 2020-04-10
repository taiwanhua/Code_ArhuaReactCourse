import React from 'react';
import './App.css'
import Buttonone from './Buttonone'

const App = () => {

  return (
    <>
      <p >這是我第一個函數組件App</p>
      <Buttonone p1={[2, 1]} p2={{ c: 3 }}>
        <div>x</div>
        y
      </Buttonone>
    </>
  )
}

export default App;
import React from 'react';
import Buttonone from './Buttonone'

const App = () => {
  let number = 1;
  let trueOrfalse = true;
  let list = [{ ID: number, Name: "阿華" }, { ID: number + 1, Name: "阿花" }, { ID: number + 2, Name: "阿話" }];
  return (
    <>
      <p>這是我第一個函數組件App</p>
      {trueOrfalse && list.map((item) => (
        <ul key={item.ID}>
          <li>ID: {item.ID}</li>
          <li>Name: {item.Name}</li>
        </ul>
      ))}


    </>
  )
}

export default App;
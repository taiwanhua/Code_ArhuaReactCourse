// import React, { useState } from 'react';
// import './App.css'
// import Buttonone from './Buttonone'
// import Buttontwo from './Buttontwo';
// import { Context } from './store'

// const App = () => {
//   const [Count, setCount] = useState(0);

//   return (
//     <>
//       <p >這是我第一個函數組件App</p>
//       <Context.Provider value={{ Count, setCount }}>
//         <Buttonone></Buttonone>
//         <Buttontwo></Buttontwo>
//       </Context.Provider>
//     </>
//   )
// }

// export default App;


import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("執行App的constructor函數");
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log("執行App的componentDidMount方法");
    console.log(document.getElementById("pForApp"));
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }

  render() {
    console.log("執行App的render函數")
    return (
      <>
        <p id="pForApp" >這是我第一個函數組件App</p>
      </>
    );
  }
}

export default App;
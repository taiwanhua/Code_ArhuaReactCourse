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
import Buttonone from './Buttonone'
import Buttontwo from './Buttontwo';

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
    console.log("執行App的componentDidUpdate方法，count : " + this.state.count);
  }
  componentWillUnmount() {
  }
  updatecount() {
    this.setState({ count: this.state.count + 1 });
    console.log("觸發App的updatecount，按下按鈕時的count值 : ", this.state.count)
  }
  render() {
    console.log("執行App的render函數，按下按鈕時的count值 : ", this.state.count)
    return (
      <>
        <p id="pForApp" >這是我第一個函數組件App</p>
        <button onClick={() => { this.updatecount() }}>觸發App重新渲染次數 : {this.state.count}</button>
        <Buttonone></Buttonone>
        <Buttontwo></Buttontwo>
      </>
    );
  }
}

export default App;
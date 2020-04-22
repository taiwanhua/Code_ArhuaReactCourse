import React, { useEffect, useState } from 'react';
import Buttontwo from './Buttontwo';

const App = (props) => {

  const [State, setState] = useState({ show: true, count: 0 });

  useEffect(() => {
    console.log("App的EffectCallback")

    // return () => {
    //   console.log("App的cleanup function")
    // }
  })

  useEffect(() => {
    // console.log("App的EffectCallback")

    return () => {
      console.log("App的cleanup function")
    }
  }, [])

  return (
    <>
      <p>這是我第一個函數組件App</p>
      <button onClick={() => { setState({ ...State, show: !State.show }) }}>卸載/掛載</button>
      <button onClick={() => { setState({ ...State, count: State.count + 1 }) }}>觸發App重新渲染次數 : {State.count}</button>
      {State.show && <Buttontwo></Buttontwo>}
    </>
  )
}

export default App;


// import React, { Component } from 'react';
// import Buttonone from './Buttonone'
// import Buttontwo from './Buttontwo';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("執行App的constructor函數");
//     this.state = { count: 0, unmount: false };
//   }
//   componentDidMount() {
//     console.log("執行App的componentDidMount方法");
//     console.log(document.getElementById("pForApp"));
//   }
//   componentDidUpdate() {
//     console.log("執行App的componentDidUpdate方法，count : " + this.state.count);
//   }
//   componentWillUnmount() {
//   }
//   updatecount() {
//     this.setState({ ...this.state, count: this.state.count + 1 });
//     console.log("觸發App的updatecount，按下按鈕時的count值 : ", this.state.count)
//   }
//   unmountButtonone() {
//     this.setState({ ...this.state, unmount: !this.state.unmount });
//   }
//   render() {
//     console.log("執行App的render函數，按下按鈕時的count值 : ", this.state.count)
//     return (
//       <>
//         <p id="pForApp" >這是我第一個函數組件App</p>
//         <button onClick={() => { this.updatecount() }}>觸發App重新渲染次數 : {this.state.count}</button>
//         <button onClick={() => { this.unmountButtonone() }}>卸載/掛載Buttonone </button>
//         {!this.state.unmount && <Buttonone></Buttonone>}
//         <Buttontwo></Buttontwo>
//       </>
//     );
//   }
// }

// export default App;
import React, { useReducer } from 'react';

const init = (initState) => {
    return initState + 100;
}

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
const Buttontwo = (props) => {

    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <>
            <p>Buttontwo組件</p>
            <p>{state}</p>
            <button onClick={() => { dispatch({ type: "加", payload: 1 }) }}>+</button>
            <button onClick={() => { dispatch({ type: "減", payload: 1 }) }}>-</button>
            <button onClick={() => { dispatch({ type: "歸零" }) }}>C</button>
        </>
    )
}

export default Buttontwo;


// import React, { Component } from 'react';

// class Buttontwo extends Component {
//     constructor(props) {
//         super(props);
//         console.log("執行Buttontwo的constructor函數");
//         this.state = { count: 0 };
//     }
//     componentDidMount() {
//         console.log("執行Buttontwo的componentDidMount方法");
//         console.log(document.getElementById("pForButtontwo"));
//     }
//     componentDidUpdate() {
//         console.log("執行Buttontwo的componentDidUpdate方法，count : " + this.state.count);
//     }
//     componentWillUnmount() {
//     }
//     updatecount() {
//         this.setState({ count: this.state.count + 1 });
//         console.log("觸發Buttontwo的updatecount，按下按鈕時的count值 : ", this.state.count)
//     }
//     render() {
//         console.log("執行Buttontwo的render函數，按下按鈕時的count值 : ", this.state.count)
//         return (
//             <>
//                 <p id="pForButtontwo" >Buttontwo組件</p>
//                 <button onClick={() => { this.updatecount() }}>觸發Buttontwo重新渲染次數 : {this.state.count}</button>
//             </>
//         );
//     }
// }

// export default Buttontwo;
import React, { useEffect, useState } from 'react';

const Buttontwo = (props) => {

    const [State, setState] = useState({ show: true, count: 0 });

    useEffect(() => {
        console.log("Buttontwo的EffectCallback")

        // return () => {
        //     console.log("Buttontwo的cleanup function")
        // }
    })

    return (
        <>
            <p>Buttontwo組件</p>
            <button onClick={() => { setState({ ...State, count: State.count + 1 }) }}>觸發Buttontwo重新渲染次數 : {State.count}</button>
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
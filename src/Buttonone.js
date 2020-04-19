// import React, { useState } from 'react';
// import Buttonthree from './Buttonthree';

// const Buttonone = (props) => {

//     return (
//         <>
//             <p>Buttonone組件</p>
//             <Buttonthree></Buttonthree>
//         </>
//     )
// }

// export default Buttonone;


import React, { Component } from 'react';
import Buttonthree from './Buttonthree';

class Buttonone extends Component {
    constructor(props) {
        super(props);
        console.log("執行Buttonone的constructor函數");
        this.state = { count: 0 };
    }
    componentDidMount() {
        console.log("執行Buttonone的componentDidMount方法");
        console.log(document.getElementById("pForButtonone"));
    }
    componentDidUpdate() {
        console.log("執行Buttonone的componentDidUpdate方法，count : " + this.state.count);
    }
    componentWillUnmount() {
        console.log("執行Buttonone的componentWillUnmount方法，count");
    }
    updatecount() {
        this.setState({ count: this.state.count + 1 });
        console.log("觸發Buttonone的updatecount，按下按鈕時的count值 : ", this.state.count)
    }
    render() {
        console.log("執行Buttonone的render函數，按下按鈕時的count值 : ", this.state.count)
        return (
            <>
                <p id="pForButtonone" >Buttonone組件</p>
                <button onClick={() => { this.updatecount() }}>觸發Buttonone重新渲染次數 : {this.state.count}</button>
                <Buttonthree></Buttonthree>
            </>
        );
    }
}

export default Buttonone;
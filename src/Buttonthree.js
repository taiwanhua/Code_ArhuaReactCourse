// import React, { useContext } from 'react';
// import { Context } from './store';

// const Buttonthree = () => {
//     const { Count, setCount } = useContext(Context)
//     return (
//         <>
//             <p>Buttonthree組件 : {Count}</p>
//             <button onClick={() => { setCount(Count + 1) }}>Buttonthree按鈕</button>
//         </>
//     )
// }

// export default Buttonthree;


import React, { Component } from 'react';

class Buttonthree extends Component {
    constructor(props) {
        super(props);
        console.log("執行Buttonthree的constructor函數");
        this.state = { count: 0 };
    }
    componentDidMount() {
        console.log("執行Buttonthree的componentDidMount方法");
        console.log(document.getElementById("pForButtonthree"));
    }
    componentDidUpdate() {
        console.log("執行Buttonthree的componentDidUpdate方法，count : " + this.state.count);
    }
    componentWillUnmount() {
        console.log("執行Buttonthree的componentWillUnmount方法，count");
    }
    updatecount() {
        this.setState({ count: this.state.count + 1 });
        console.log("觸發Buttonthree的updatecount，按下按鈕時的count值 : ", this.state.count)
    }
    render() {
        console.log("執行Buttonthree的render函數，按下按鈕時的count值 : ", this.state.count)
        return (
            <>
                <p id="pForButtonthree" >Buttonthree組件</p>
                <button onClick={() => { this.updatecount() }}>觸發Buttonthree重新渲染次數 : {this.state.count}</button>
            </>
        );
    }
}

export default Buttonthree;
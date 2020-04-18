// import React from 'react';
// import { Context } from './store';

// const Buttontwo = () => {
//     return (
//         <>
//             <Context.Consumer>
//                 {value => <p>Buttontwo組件 : {value.Count}</p>}
//             </Context.Consumer>
//         </>
//     )
// }

// export default Buttontwo;


import React, { Component } from 'react';

class Buttontwo extends Component {
    constructor(props) {
        super(props);
        console.log("執行Buttontwo的constructor函數");
        this.state = { count: 0 };
    }
    componentDidMount() {
        console.log("執行Buttontwo的componentDidMount方法");
        console.log(document.getElementById("pForButtontwo"));
    }
    componentDidUpdate() {
        console.log("執行Buttontwo的componentDidUpdate方法，count : " + this.state.count);
    }
    componentWillUnmount() {
    }
    updatecount() {
        this.setState({ count: this.state.count + 1 });
        console.log("觸發Buttontwo的updatecount，按下按鈕時的count值 : ", this.state.count)
    }
    render() {
        console.log("執行Buttontwo的render函數，按下按鈕時的count值 : ", this.state.count)
        return (
            <>
                <p id="pForButtontwo" >Buttontwo組件</p>
                <button onClick={() => { this.updatecount() }}>觸發Buttontwo重新渲染次數 : {this.state.count}</button>
            </>
        );
    }
}

export default Buttontwo;
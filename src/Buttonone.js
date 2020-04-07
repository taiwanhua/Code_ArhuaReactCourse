import React from 'react';

const Buttonone = ({ props, ...other }) => {
    console.log(props);
    console.log(other);

    return (
        <button>按鈕 {props.a} {other.p1.b}</button>
    )
}

export default Buttonone;
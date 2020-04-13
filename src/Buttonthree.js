import React from 'react';
import { Context } from './store';

const Buttonthree = () => {
    return (
        <>
            <Context.Consumer>
                {value =>
                    <>
                        <p>Buttonthree組件 : {value.Count}</p>
                        <button onClick={() => { value.setCount(value.Count + 1) }}>Buttonthree按鈕</button>
                    </>
                }
            </Context.Consumer>
        </>
    )
}

export default Buttonthree;
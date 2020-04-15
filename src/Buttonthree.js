import React, { useContext } from 'react';
import { Context } from './store';

const Buttonthree = () => {
    const { Count, setCount } = useContext(Context)
    return (
        <>
            <p>Buttonthree組件 : {Count}</p>
            <button onClick={() => { setCount(Count + 1) }}>Buttonthree按鈕</button>
        </>
    )
}

export default Buttonthree;
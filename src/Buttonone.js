import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Buttonone = (props) => {
    const [Restore, setRestore] = useState(props.a)
    return (
        <>
            <button onClick={() => { setRestore(Restore + 2) }}> 按鈕 {Restore}</button>
            <p>props.a : {props.a}</p>
        </>
    )
}


Buttonone.propTypes = {
    p1: PropTypes.arrayOf(PropTypes.number),
    p2: PropTypes.shape({
        c: PropTypes.number
    })
}

export default Buttonone;
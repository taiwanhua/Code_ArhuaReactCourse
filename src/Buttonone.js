import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Buttonone = (props) => {

    return (
        <>
            <button onClick={() => { props.a(200) }}> 按鈕</button>
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
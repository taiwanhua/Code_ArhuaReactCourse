import React from 'react';
import PropTypes from 'prop-types';

const Buttonone = (props) => {
    console.log("props", props);

    return (
        <button>按鈕 {props.children}</button>
    )
}


Buttonone.propTypes = {
    p1: PropTypes.arrayOf(PropTypes.number),
    p2: PropTypes.shape({
        c: PropTypes.number
    })
}

export default Buttonone;
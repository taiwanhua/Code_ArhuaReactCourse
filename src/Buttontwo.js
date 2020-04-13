import React from 'react';
import { Context } from './store';

const Buttontwo = () => {
    return (
        <>
            <Context.Consumer>
                {value => <p>Buttontwo組件 : {value.Count}</p>}
            </Context.Consumer>
        </>
    )
}

export default Buttontwo;
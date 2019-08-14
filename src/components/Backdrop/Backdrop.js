import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = ['Backdrop', props.backdropActive ? 'BackdropOpened' : "BackdropClosed"]
    return <div className={cssClasses.join(' ')}></div>
};

export default backdrop;
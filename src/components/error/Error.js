import React from 'react';
import './error.css';

const Error = ({text, styleClass}) => (
    <div className={`error ${styleClass}`}>
        Error: {text}
    </div>
);

export default Error;

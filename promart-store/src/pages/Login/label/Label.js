import React from 'react';
import './Label.sass'


const Label = (props) => {
    const { text } = props;
    return(
        <div className="label-text">{text}</div>   
        )
    }

export default Label
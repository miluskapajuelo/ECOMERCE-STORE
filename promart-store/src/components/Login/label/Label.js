import React from 'react';
import './Label.sass'


const Label = ({text, classText}) => {
    return(
        <div className={classText}>{text}</div>   
        )
    }

export default Label
import React from 'react';
import './../title/Title.sass';

const Title = (props) => {
    /* declaro un objeto y lo igualo a props */
    const {text} = props;
    return (
        <div className="title-container">
            <label className="title-label">{text}</label>
        </div>
    )
}

export default Title
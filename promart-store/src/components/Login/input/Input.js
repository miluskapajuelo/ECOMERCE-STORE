import React from 'react';
import './Input.sass'


const Input = ({attribute, handleChange, param}) => {
    return(
        <div className="input-container">
            <input 
            id= {attribute.id}
            name= {attribute.name}
            placeholder= {attribute.placeholder}
            type= {attribute.type}
            onChange= {(e)=> handleChange(e.target.name,e.target.value)}
            className= {param?"regular-error":"regular-style" }
            />
        </div>   
        )
    }

export default Input
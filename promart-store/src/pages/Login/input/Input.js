import React from 'react';


const Input = ({attribute, handlerChange, param}) => {
    return(
        <div>
            <input 
            id= {attribute.id}
            name= {attribute.name}
            placeholder= {attribute.placeholder}
            type= {attribute.type}
            onchange= {(e)=> handlerChange(e.target.name, e.target.value)}
            className= "regular-state"
            />
        </div>   
        )
    }

export default Input
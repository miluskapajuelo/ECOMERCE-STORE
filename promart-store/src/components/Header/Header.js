import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import foto from './../../assets/images/logoPromart.png'
import './Header.sass'
import {useHistory} from 'react-router-dom'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
        
    let history = useHistory()
    const back = ()=>{
        history.push("/products")
    }
return(
    <article className="header">
        {props.icon?<div className="icon" onClick={back}><FontAwesomeIcon icon={faArrowLeft} /></div>:''}
        {props.title?<h2>{props.title}</h2>:''}
        <div className="display"><img src={foto} alt="logoPromart"/></div>
    </article>
)
}

export default Header


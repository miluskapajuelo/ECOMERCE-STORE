import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import foto from './../../assets/images/logo.svg'
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
        {props.head?<img src={foto} alt="logoPromart"/>:''}
        {props.title?<div className="display"><img src={foto} alt="logoPromart"/></div>:''}
        
    </article>
)
}

export default Header


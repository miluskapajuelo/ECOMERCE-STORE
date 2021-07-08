import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import './Footer.sass'
import {useHistory} from 'react-router-dom'
import {getItemCart} from '../../module/cart-local'
import {useStateValue} from './../../module/StateProvider'


const Footer = () => {
   
    const [{basket}, dispatch]=useStateValue()

    let history = useHistory()
    
    const shoppingCart = ()=>{
        history.push({pathname:"/cart"})

    }
    const home = ()=>{
        history.push("/products")
    }

    const login =()=>{
        history.push("/login")
    }
/*     getItemCart-localstoage */
    const postElement =(item)=> {
        dispatch({
            type:'initial',
            item: item
        })
    }
   

    useEffect(() => {
        if(getItemCart()!==null ||getItemCart()>0 ){
            getItemCart().forEach(elem=>postElement(elem))
        }  
    },[])


    return (
        <footer>
            <article className="section-button"><button className="button" onClick={home}><FontAwesomeIcon icon={faHome} /> Home</button></article>
            <article className="section-icons">
                <div className="icon"><FontAwesomeIcon icon={faHeart} /></div>
                <div className="group">
                {getItemCart()?.length?<div className="counter">{getItemCart()?.length}</div>:''}
                <div className="icon" onClick={shoppingCart}><FontAwesomeIcon icon={faShoppingCart} /></div>
                </div>
                <div className="icon"  onClick={login}><FontAwesomeIcon icon={faUser} /></div>
            </article>
        </footer>
    )
}


export default Footer
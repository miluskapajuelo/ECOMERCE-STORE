import React from 'react';
import './Product.sass'
import accounting from 'accounting';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const Product = ({product, addProduct}) => {
    /* const {title, price, image, id} = product */

    
   

    return (
        <section className="card-container">
            <article className="first-content">
                <div>30% OFF</div>
                <div ><FontAwesomeIcon icon={faHeart} /></div>
            </article>
            <figure className="second-content">
                <img src={product.image} alt={product.title} width="60%" height="100%" />
            </figure>
            <article className="third-content">
                <div>{product.title}</div>
                <div className="price">{accounting.formatMoney(product.price)}</div>
                <button className="button-add" onClick={()=>{addProduct(product.id)}}>Add</button>
            </article>
            
        </section>
    )
}

export default Product

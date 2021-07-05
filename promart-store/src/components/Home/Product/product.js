import React from 'react';
import './Product.sass'
import accounting from 'accounting';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const Product = ({product, cart, products}) => {
    const {title, price, image, id} = product

    /* const addProduct=(id)=>{
        const productSelected = products.filter((product)=>product.id === id)
    } */

    return (
        <section className="card-container">
            <article className="first-content">
                <div>30% OFF</div>
                <div /* onClick={() =>addProduct(id)} */><FontAwesomeIcon icon={faHeart} /></div>
            </article>
            <figure className="second-content">
                <img src={image} alt={title} width="60%" height="100%" />
            </figure>
            <article className="third-content">
                <div>{title}</div>
                <div className="price">{accounting.formatMoney(price)}</div>
            </article>
        </section>
    )
}

export default Product

import React, {useState} from 'react';
import './Product.sass'
import accounting from 'accounting';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {useStateValue} from '../../../module/StateProvider'

const Product = ({product}) => {
    /* const {title, price, image, id} = product */
    const [{basket}, dispatch]= useStateValue()
    const [quantity, setQuantity] = useState(1);
    
    const productsSelected ={
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image ,
        quantity:quantity,
        description: product.description,
        category:product.category

    }

    const addToBasket =()=> {
        setQuantity(quantity)
            dispatch({
                type:'add',
                item: productsSelected
            })
            }
   

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
                <button className="button-add" onClick={addToBasket}>add</button>
            </article>
            
        </section>
    )
}

export default Product

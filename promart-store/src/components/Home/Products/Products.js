import React from 'react';
import Axios from 'axios'
import {domain} from './../../../services/api-rest'
import './Products.sass'

const Products = () => {

    const getImage = () =>{
        const url = domain
        const endpoint = 'products'
        Axios.get(`${url}${endpoint}`).then((response)=>{
            console.log(response)
        })
    }
    return (
        <div>hola mundo
            <button onClick={getImage} type="button">click me</button>
        </div>
    )
}

export default Products

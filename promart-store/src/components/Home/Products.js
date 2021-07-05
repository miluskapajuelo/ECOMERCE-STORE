import React,{useState, useEffect} from 'react';
import { categoryAll } from '../../services/category'
import { productAll } from '../../services/products'
import Product from './Product/Product'
import Category from './Categories/Category'

import './Products.sass'

const Products = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const token = localStorage.getItem('token')
    const getCategories = async() => {
        try {
          const response = await categoryAll(token);
          setCategories(response) ;
        }
        catch (err) {
          console.log(err)
        }
      };

     useEffect(() => {
        getCategories();
    
    })

    const getProducts = async() => {
      try {
        const response = await productAll(token);
        setProducts(response) ;
        console.log(response)
      }
      catch (err) {
        console.log(err)
      }
    };
      

    return (
      <main>
        <section>
            <article className="category-container">
            {categories.map(categ => 
            <Category category= {categ} key={categ}/>
            )}
            </article>
            <article className="products-container">
            {products.map(prod =>{
              return <Product key={prod.id} product ={prod}/>})}
            </article>
            <button onClick={getProducts}></button>
        </section>
      </main>
    )
}

export default Products

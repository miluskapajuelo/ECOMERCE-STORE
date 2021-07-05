import React,{useState, useEffect} from 'react';
import { categoryAll } from '../../services/category'
import { productAll } from '../../services/products'
import Product from './Product/Product'
import Category from './Categories/Category'
import Footer from '../Footer/Footer'

import './Products.sass'

const Products = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [productsAll, setProductsAll] = useState([]);
    const [cart, setCart] = useState([]);

    const token = localStorage.getItem('token')
    const getCategories = async() => {
        try {
          const response = await categoryAll(token);
          setCategories(response) ;
          console.log(response)
        }
        catch (err) {
          console.log(err)
        }
      };
/* 
     useEffect(() => {
        getCategories();

    }) */

    const getProducts = async() => {
      try {
        const response = await productAll(token);
        setProducts(response) ;
        setProductsAll(response) ;
        console.log(response)
      }
      catch (err) {
        console.log(err)
      }
    };
    
    const selectCategory= (category)=> {
      const elemento = productsAll.filter(elem => elem.category === category)
      setProducts(elemento)    
    }

    return (
      <main>
        <section>
            <article className="category-container">
            {categories.map(categ => 
            <Category category= {categ} key={categ} selectCategory={selectCategory}/>
            )}
            </article>
            <article className="products-container">
            {products.map(prod =>{
              return <Product key={prod.id} product ={prod} cart={cart} products={products}/>})}
            </article>
            <button onClick={getProducts}></button>
            <Footer />
        </section>
      </main>
    )
}

export default Products

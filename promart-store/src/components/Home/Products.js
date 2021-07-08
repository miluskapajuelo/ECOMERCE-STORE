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
    /* estado del carrito de compras */
    const [productsCart, setProductsCart] = useState([]);

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
        getProducts()
    },[])

    const getProducts = async() => {
      try {
        const response = await productAll(token);
        setProducts(response) ;
        setProductsAll(response) ;
      }
      catch (err) {
        console.log(err)
      }
    };
    
    const selectCategory= (category)=> {
      const elemento = productsAll.filter(elem => elem.category === category)
      setProducts(elemento)    
    }

    const addProduct=(id)=>{
      const productSelected = products.filter((elem)=>elem.id === id)
      setProductsCart(productsCart=>[...productSelected,...productsCart])
   }
   

    return (
      <main>
        <section>
            <ul className="category-container">
            {categories.map(categ => 
            <Category category= {categ} key={categ} selectCategory={selectCategory}/>
            )}
            <li className="buttonProducts" onClick={getProducts}>Todos</li>
            </ul>
            <article className="products-container">
            {products.map(prod =>(<Product key={prod.id} product ={prod} addProduct={addProduct}/>))}
            </article>
        </section>
        <Footer/>
      </main>
    )
}

export default Products

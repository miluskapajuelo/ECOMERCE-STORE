import React from 'react';
import './Category.sass'

const Category = ({category,selectCategory}) => {  
    return (
            <li 
            className="category-contain"
            onClick={(e) => selectCategory(e.target.innerHTML)}>
                {category}
            </li>        
    )
}

export default Category

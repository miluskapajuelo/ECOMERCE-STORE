import React from 'react';
import './Category.sass'

const Category = ({category}) => {  
    return (
            <li className="category-contain">
                {category}
            </li>        
    )
}

export default Category

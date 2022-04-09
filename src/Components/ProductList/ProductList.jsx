import React, { useState } from 'react';
import Product from './Product/Product';
import './productList.css';


const ProductList = ({ title, post }) => {
    
    return (
        <div className='productlist'>
            <h1>{title}</h1>
            <div className="product">
            {post && 
               post?.map((product) => (
                   <Product key={product.id} product={product}/>
               ))}
            </div>
        </div>
    )
}
export default ProductList;
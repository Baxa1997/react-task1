import React from 'react';
import Fav from '../../../Assets/Image/heart.png';
import Graph from '../../../Assets/Image/graph.png';

const Product = ({ product }) => {
    return (
        <>
           <div className="card">
            <img 
            src={product?.image} 
            alt="" />
            <div className="flex-content">
                <h3>{product.name}</h3>
                {product?.old_price ? <p className="old-price">${product.old_price} </p> : <p></p>}
                <p className='price'>${product.price}</p>
                <div className="features">
                    {product.in_stock == 0 ? <button className="addCart disabled">Add to Cart</button> : <button className="addCart">Add to Cart</button>}
                    <a href="#"><img src={Graph} alt="" /></a>
                    <a href="#"><img src={Fav} alt="" /></a>
                </div>
            </div>
        
           </div>
        </>
    )
}

export default Product;
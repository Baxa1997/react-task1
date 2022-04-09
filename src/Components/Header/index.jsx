import React from 'react';
import Logo from '../../Assets/Image/MaxProff.png';
import Search from '../../Assets/Image/search-btn.png';
import Fav from '../../Assets/Image/heart.png';
import Graph from '../../Assets/Image/graph.png';
import Shop from '../../Assets/Image/shop.png';
import Login from '../../Assets/Image/login.png';
import './header.css';


const header = ({posts}) => {
    return (
       <>
         <div className="header">
            <a href="#" className='logo'>
                <img src={Logo} alt="" />
            </a>
            <div className="search-input">
                    <input type="text" placeholder='Search products'/>
                    <button className="search-btn"><img src={Search} alt="" /></button>
                </div>
             
            <div className="flex-content">
                <div className="extra-links">
                    <div className="best">
                        <img src={Fav} alt="" />
                        <p>Favourite</p>
                    </div>
                    <div className="compared">
                        <img src={Graph} alt="" />
                        <p>Comparison</p>
                    </div>
                    <div className="cart">
                        <img src={Shop} alt="" />
                        <p>Cart</p>
                    </div>
                    <div className="login">
                        <img src={Login} alt="" />
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="header-request_links">
            {posts && posts?.map(post => (
              <p> <a href="#">{post?.name}</a></p>
        ))}
        </div>
       
       </>
    )
}

export default header;
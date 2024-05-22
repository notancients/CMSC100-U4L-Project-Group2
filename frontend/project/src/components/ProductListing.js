import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductListing.css';
import { PRODUCT_SAMPLE_DATA } from './ProductSample';

function ProductListing({ cart, setCart }) {

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
        console.log(`Added ${item.productName} to cart`);
    };

    return(
        <div className="product-listing-page">
            <div className="navbar">
                <Link to="/user" className="logo">
                    <img src="" alt="Farm2Table logo"/>
                </Link>
                <Link to="/orders" className="navlink">ORDERS</Link>
                <Link to="/products" className="navlink">PRODUCTS</Link>
                <Link to="/cart" className="navlink">CART ({cart.length}) </Link>
                <Link to="/about-us" className="navlink">ABOUT US</Link>
                <Link to="/profile">
                    <img src="" alt="Icon" className="profile-icon"/>
                </Link>
            </div>
            <div className="products-title">Our Products</div>
            <div className="sort-by-group">
                <p className="sort">SORT BY: </p>
                <p className="sort">NAME </p>
                <p className="sort">TYPE </p>
                <p className="sort">PRICE </p>
                <p className="sort">QUANTITY </p>
            </div>
            <div className="product-list">
                {PRODUCT_SAMPLE_DATA.map((item) => (
                <div key={item.productId} className="item">
                    <div className="content">
                    <img src={item.img} alt={item.productName}/>
                    <p className="name">{item.productName}</p>
                    <p className="desc">{item.productDescription}</p>
                    </div>
                    <div className="stock">
                        <button onClick={() => handleAddToCart(item)}>PHP {item.price}</button>
                        <p className="quantity">Stock: {item.productQuantity}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ProductListing;
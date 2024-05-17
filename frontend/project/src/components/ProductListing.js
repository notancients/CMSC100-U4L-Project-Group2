import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductListing.css';
import { PRODUCT_SAMPLE_DATA } from './ProductSample';

function ProductListing() {

    const handleAddToCart = (item) => {
        console.log(`Added ${item} to cart`);
    };

    return(
        <div className="product-listing-page">
            <div className="navbar">
                <Link to="/user" className="logo">
                    <img src="" alt="Farm2Table logo"/>
                </Link>
                <Link to="/orders" className="navlink">ORDERS</Link>
                <Link to="/products" className="navlink">PRODUCTS</Link>
                <Link to="/cart" className="navlink">CART</Link>
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
                {PRODUCT_SAMPLE_DATA.map(PRODUCT_SAMPLE_DATA => (
                <div key={PRODUCT_SAMPLE_DATA.id} className="item">
                    <img src={PRODUCT_SAMPLE_DATA.img} alt={PRODUCT_SAMPLE_DATA.productName}/>
                    <p className="name">{PRODUCT_SAMPLE_DATA.productName}</p>
                    <p className="desc">{PRODUCT_SAMPLE_DATA.productDescription}</p>
                    <button onClick={() => handleAddToCart(PRODUCT_SAMPLE_DATA.productName)}>PHP {PRODUCT_SAMPLE_DATA.price}</button>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ProductListing;
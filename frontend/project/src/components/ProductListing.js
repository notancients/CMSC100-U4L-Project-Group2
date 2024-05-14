import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductListing.css';

function ProductListing() {
    const products = [
        { id: 1, name: "CAULIFLOWER", desc: "Locally sourced. Versatile. Nutrient-rich. Elevate your dishes with our farm-fresh cauliflower.", img: "", price: 89.00 },
        { id: 2, name: "CAULIFLOWER", desc: "Locally sourced. Versatile. Nutrient-rich. Elevate your dishes with our farm-fresh cauliflower.", img: "", price: 89.00 },
        { id: 3, name: "CAULIFLOWER", desc: "Locally sourced. Versatile. Nutrient-rich. Elevate your dishes with our farm-fresh cauliflower.", img: "", price: 89.00 },
        { id: 4, name: "CAULIFLOWER", desc: "Locally sourced. Versatile. Nutrient-rich. Elevate your dishes with our farm-fresh cauliflower.", img: "", price: 89.00 }
    ];

    const handleAddToCart = (item) => {
        console.log(`Added ${item} to cart`);
    };

    return(
        <div className="product-listing-page">
            <div className="navbar">
                <Link to="/orders" className="navlink">ORDERS</Link>
                <Link to="/products" className="navlink">PRODUCTS</Link>
                <Link to="/cart" className="navlink">CART</Link>
                <Link to="/about-us" className="navlink">ABOUT US</Link>
            </div>
            <div className="products-title">Our Products</div>
            <div className="product-list">
                {products.map(product => (
                <div key={product.id} className="item">
                    <img src={product.img} alt={product.name}/>
                    <p className="name">{product.name}</p>
                    <p className="desc">{product.desc}</p>
                    <button onClick={() => handleAddToCart(product.name)}>{product.price}</button>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ProductListing;
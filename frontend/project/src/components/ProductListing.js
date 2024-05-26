import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductListing.css';
import { PRODUCT_SAMPLE_DATA } from './ProductSample';
import axios from "axios";

//issue: accurately updating stock

function ProductListing() {

    const [product, setProduct] = useState(null);

    useEffect( () => {
        const fetch_data = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/get-all-products");
                console.log(response.data.data);
                setProduct(response.data.data);
            } catch (err) {
                console.log(err);
                setProduct(null);
            }
        }
    
        fetch_data();
    }, []);

    const handleDecreaseStock = (productId) => {
        for(let i=0; i<product.length; i++) {
            if(product[i].productId === productId) {
                if(product[i].productQuantity > 0) {
                    setProduct(prevState => {
                        const newState = [...prevState];
                        newState[i].productQuantity -= 1;
                        return newState;
                    });
                    break;
                }
            }
        }
    };

    const handleIncreaseStock = (productId) => {
        for(let i=0; i<product.length; i++) {
            if(product[i].productId === productId) {
                setProduct(prevState => {
                    const newState = [...prevState];
                    newState[i].productQuantity += 1;
                    return newState;
                });
                break;
            }
        }
    };

    return(
        <div className="product-listing-page">
            <div className="navbar">
                <Link to="/user" className="logo">
                    <img src="" alt="Farm2Table logo"/>
                </Link>
                <Link to="/orders" className="navlink">USERS</Link>
                <Link to="/products" className="navlink">PRODUCTS</Link>
                <Link to="/cart" className="navlink">ORDERS</Link>
                <Link to="/about-us" className="navlink">SALES</Link>
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
                        <p className="price">PHP {item.price}</p>
                        <button onClick={() => handleDecreaseStock(item.productId)} className="stock-upd"> - </button>
                        <p className="quantity">{item.productQuantity}</p>
                        <button onClick={() => handleIncreaseStock(item.productId)} className="stock-upd"> + </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ProductListing;
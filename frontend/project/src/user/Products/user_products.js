import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/user_products.css';
import logo from '../../images/Logo.png';
import userIcon from '../../images/user_icon.png';
import CustomCursor from '../../components/customCursor';
import axios from "axios";


function UserProductsPage({ cart, setCart }) {
    const [products, setProducts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedType, setSelectedType] = useState('All'); 
    const [notification, setNotification] = useState({ message: '', visible: false });

    useEffect( () => {
        console.log("Fetching products data.");
        const fetch_data = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/api/get-all-products", {
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
                
                console.log(response);
                console.log(response.data.data);
                setProducts(response.data.data);
            } catch (err) {
                console.log(err);
                setProducts([]);
            }
        }
    
        fetch_data();
    }, []);


    const handleAddToCart = async (productToAdd) => {
        console.log("Handling add to cart.");
        const existingItem = cart.find(item => item._id === productToAdd._id);

        if (existingItem) {
            const updatedCart = cart.map( async (item) => {
                if (item._id === productToAdd._id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...productToAdd, quantity: 1 }]);
        }

        try {
            console.log("Adding product to cart database.");
            const response = await axios.post('http://localhost:3001/api/add-to-cart', {
                "user_id" : "66443306653ccde666260bfb",
                "product_id" : productToAdd._id,
                "quantity" : 1
            });
            console.log(response);
            
        } catch (err) {
            console.log(err);
        }
    
        setNotification({ message: `${productToAdd.product_name} added to cart!`, visible: true });
    
        setTimeout(() => {
            setNotification({ message: '', visible: false });
        }, 3000);
    };
    
    

    const handleSort = (criteria) => {
        const newDirection = sortCriteria === criteria && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortCriteria(criteria);
        setSortDirection(newDirection);

        const sortedProducts = [...products].sort((a, b) => {
            if (criteria === 'product_name' || criteria === 'product_type') {
                return newDirection === 'asc' ? a[criteria].localeCompare(b[criteria]) : b[criteria].localeCompare(a[criteria]);
            } else {
                return newDirection === 'asc' ? a[criteria] - b[criteria] : b[criteria] - a[criteria];
            }
        });

        setProducts(sortedProducts);
    };

    const handleFilterByType = (type) => {
        setSelectedType(type);
    };

    const computeTotalCartQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };
    

    const filteredProducts = selectedType === 'All' ? products : products.filter(product => product.product_type === selectedType);

    const renderSortIndicator = (criteria) => {
        if (sortCriteria === criteria) {
            return sortDirection === 'asc' ? '↑' : '↓';
        }
        return '';
    };

    const renderProductTypesDropdown = () => {
        const uniqueTypes = ['All', ...new Set(products.map(product => product.product_type))];
        return (
            <select className="custom-dropdown" value={selectedType} onChange={(e) => handleFilterByType(e.target.value)}>
                {uniqueTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>
        );
    };
    
    return (
        <div className="user-products-page">
            <CustomCursor />
            {notification.visible && (
            <div className="notification">
            <i className="fas fa-check notification-icon"></i>
            <span className="notification-message">{notification.message}</span>
        </div>
        
        
        )}
            <div className="logo">
                <Link to="/"> 
                    <img src={logo} alt="Logo Here" className="logo-img" />
                </Link>
            </div> 
            <div className="nav-bar">
                <Link to="/userorders" className="nav-link">ORDERS</Link>
                <Link to="/userproducts" className="nav-link">PRODUCTS</Link>
                <Link to="/cart" className="nav-link">CART ({computeTotalCartQuantity()})</Link>
                <Link to="/about-us" className="nav-link">ABOUT US</Link>
                <Link to="/profile" className="user-profile">
                    <img src={userIcon} alt="Icon" className="user-icon"/>
                </Link>
            </div>
            <div className="title-container">
                <h1>Our Products</h1>
            </div>
            <div className="sort-and-filter-container">
                <div className="sort-by-group">
                    <p className="sort">SORT:</p>
                    <button className="sort" onClick={() => handleSort('product_name')}>NAME {renderSortIndicator('product_name')}</button>
                    <button className="sort" onClick={() => handleSort('product_type')}>TYPE {renderSortIndicator('product_type')}</button>
                    <button className="sort" onClick={() => handleSort('price')}>PRICE {renderSortIndicator('price')}</button>
                    <button className="sort" onClick={() => handleSort('quantity')}>QUANTITY {renderSortIndicator('quantity')}</button>
                </div>
                <div className="type-filter">
                    <p className="filter">FILTER:  {renderProductTypesDropdown()}</p>
                </div>
            </div>

            <div className="user-product-list">
            {filteredProducts.map((item) => (
                    <div key={item._id} className="item">
                        <div className="content">
                            <img src={item.img} alt={item.product_name} className='product-img'/>
                            <p className="name">{item.product_name}</p>
                            <p className="desc">{item.product_description}</p>
                        </div>
                        <div className="details">
                            <div className='price-and-stock'>
                            <p className="user-price">₱ {item.price}</p>
                            <p className="cur_stock">Stock: {item.product_quantity}</p>
                            </div>
                            <button className='addtocart' onClick={() => handleAddToCart(item)}>Add to cart</button>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserProductsPage

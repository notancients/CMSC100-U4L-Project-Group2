import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/user_products.css';
import { PRODUCT_SAMPLE_DATA } from './ProductSample';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';
import ShoppingCart from './shopping_cart';


function UserProductsPage({ cart, setCart, cartQuantity }) {
    const [products, setProducts] = useState(PRODUCT_SAMPLE_DATA);
    const [sortCriteria, setSortCriteria] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedType, setSelectedType] = useState('All'); 
    const [notification, setNotification] = useState({ message: '', visible: false });


    const handleAddToCart = (productToAdd) => {
        const existingItem = cart.find(item => item.productId === productToAdd.productId);
    
        if (existingItem) {
            const updatedCart = cart.map(item => {
                if (item.productId === productToAdd.productId) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...productToAdd, quantity: 1 }]);
        }
    
        setNotification({ message: `${productToAdd.productName} added to cart!`, visible: true });
    
        setTimeout(() => {
            setNotification({ message: '', visible: false });
        }, 3000);
    };
    
    

    const handleSort = (criteria) => {
        const newDirection = sortCriteria === criteria && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortCriteria(criteria);
        setSortDirection(newDirection);

        const sortedProducts = [...products].sort((a, b) => {
            if (criteria === 'productName' || criteria === 'productType') {
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
    

    const filteredProducts = selectedType === 'All' ? products : products.filter(product => product.productType === selectedType);

    const renderSortIndicator = (criteria) => {
        if (sortCriteria === criteria) {
            return sortDirection === 'asc' ? '↑' : '↓';
        }
        return '';
    };

    const renderProductTypesDropdown = () => {
        const uniqueTypes = ['All', ...new Set(products.map(product => product.productType))];
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
                    <button className="sort" onClick={() => handleSort('productName')}>NAME {renderSortIndicator('productName')}</button>
                    <button className="sort" onClick={() => handleSort('productType')}>TYPE {renderSortIndicator('productType')}</button>
                    <button className="sort" onClick={() => handleSort('price')}>PRICE {renderSortIndicator('price')}</button>
                    <button className="sort" onClick={() => handleSort('productQuantity')}>QUANTITY {renderSortIndicator('productQuantity')}</button>
                </div>
                <div className="type-filter">
                    <p className="filter">FILTER:  {renderProductTypesDropdown()}</p>
                </div>
            </div>

            <div className="user-product-list">
            {filteredProducts.map((item) => (
                    <div key={item.productId} className="item">
                        <div className="content">
                            <img src={item.img} alt={item.productName} className='product-img'/>
                            <p className="name">{item.productName}</p>
                            <p className="desc">{item.productDescription}</p>
                        </div>
                        <div className="details">
                            <div className='price-and-stock'>
                            <p className="user-price">₱ {item.price}</p>
                            <p className="cur_stock">Stock: {item.productQuantity}</p>
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

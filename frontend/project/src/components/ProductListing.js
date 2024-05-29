import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductListing.css';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';
import CustomCursor from './customCursor';
import axios from 'axios';

function ProductListing() {
    const [products, setProducts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedType, setSelectedType] = useState('All'); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/get-all-products');
                setProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    const handleDecreaseStock = (productId) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product._id === productId && product.product_quantity > 0
                    ? { ...product, product_quantity: product.product_quantity - 1 }
                    : product
            )
        );
    };

    const handleIncreaseStock = (productId) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product._id === productId
                    ? { ...product, product_quantity: product.product_quantity + 1 }
                    : product
            )
        );
    };

    const handleSort = (criteria) => {
        console.log(criteria)
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
        <div className="product-listing-page">
            <CustomCursor />
            <div className="logo">
                <Link to="/"> 
                    <img src={logo} alt="Logo Here" className="logo-img" />
                </Link>
            </div> 
            <div className="nav-bar">
                <Link to="/userList" className="nav-link">USERS</Link>
                <Link to="/productlisting" className="nav-link">PRODUCTS</Link>
                <Link to="/orderfulfillment" className="nav-link">ORDERS</Link>
                <Link to="/sales" className="nav-link">SALES</Link>
                <Link to="/profile" className="user-profile">
                    <img src={userIcon} alt="Icon" className="user-icon"/>
                </Link>
            </div>
            <div className="title-container">
                <h1>Products Listing</h1>
            </div>
            <div className="sort-and-filter-container">
                <div className="sort-by-group">
                    <p className="sort">SORT:</p>
                    <button className="sort" onClick={() => handleSort('product_name')}>NAME {renderSortIndicator('product_name')}</button>
                    <button className="sort" onClick={() => handleSort('product_type')}>TYPE {renderSortIndicator('product_type')}</button>
                    <button className="sort" onClick={() => handleSort('price')}>PRICE {renderSortIndicator('price')}</button>
                    <button className="sort" onClick={() => handleSort('product_quantity')}>QUANTITY {renderSortIndicator('product_quantity')}</button>
                </div>
                <div className="type-filter">
                    <p className="filter">FILTER:  {renderProductTypesDropdown()}</p>
                </div>
            </div>

            <div className="product-list">
                {filteredProducts.map((item) => (
                    <div key={item._id} className="item">
                        <div className="content">
                            <img src={item.img} alt={item.product_name} className='product-img'/>
                            <p className="name">{item.product_name}</p>
                            <p className="desc">{item.product_description}</p>
                        </div>
                        <div className="stock">
                            <p className="price">₱ {item.price}</p>
                            <div className="stock-controls">
                                <button
                                    className="stock-upd"
                                    onClick={() => handleDecreaseStock(item._id)}
                                    disabled={item.product_quantity === 0}
                                >
                                    -
                                </button>
                                <p className="quantity">{item.product_quantity}</p>
                                <button
                                    className="stock-upd"
                                    onClick={() => handleIncreaseStock(item._id)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductListing;

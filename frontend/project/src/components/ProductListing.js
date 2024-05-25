import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductListing.css';
import { PRODUCT_SAMPLE_DATA } from './ProductSample';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';
function ProductListing() {
    const [products, setProducts] = useState(PRODUCT_SAMPLE_DATA);
    const [sortCriteria, setSortCriteria] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedType, setSelectedType] = useState('All'); 

    const handleDecreaseStock = (productId) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.productId === productId && product.productQuantity > 0
                    ? { ...product, productQuantity: product.productQuantity - 1 }
                    : product
            )
        );
    };

    const handleIncreaseStock = (productId) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.productId === productId
                    ? { ...product, productQuantity: product.productQuantity + 1 }
                    : product
            )
        );
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
        <div className="product-listing-page">
            <div className="logo">
                <Link to="/"> 
                    <img src={logo} alt="Logo Here" className="logo-img" />
                </Link>
            </div> 
            <div className="nav-bar">
                <Link to="/userList" className="nav-link">USERS</Link>
                <Link to="/productlisting" className="nav-link">PRODUCTS</Link>
                <Link to="/orderfulfillment" className="nav-link">ORDERS</Link>
                <Link to="/about-us" className="nav-link">SALES</Link>
                <Link to="/profile" className="user-profile">
                    <img src={userIcon} alt="Icon" className="user-icon"/>
                </Link>
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

            <div className="product-list">
            {filteredProducts.map((item) => (
                    <div key={item.productId} className="item">
                        <div className="content">
                            <img src={item.img} alt={item.productName} className='product-img'/>
                            <p className="name">{item.productName}</p>
                            <p className="desc">{item.productDescription}</p>
                        </div>
                        <div className="stock">
                            <p className="price">₱ {item.price}</p>
                            <div className="stock-controls">
            <button
                className="stock-upd"
                onClick={() => handleDecreaseStock(item.productId)}
                disabled={item.productQuantity === 0}
            >
                -
            </button>
            <p className="quantity">{item.productQuantity}</p>
            <button
                className="stock-upd"
                onClick={() => handleIncreaseStock(item.productId)}
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

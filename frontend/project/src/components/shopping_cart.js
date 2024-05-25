import React, { useState } from 'react';
import UserProductsPage from './user_products';
import '../css/shoppingCart.css';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';



function ShoppingCart({ cart, setCart }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleRemove = (item) => {
    const removeItem = cart.filter((remItem) => remItem.productId !== item.productId);
    setCart(removeItem);
    setSelectedItems(selectedItems.filter((selItem) => selItem.productId !== item.productId));
  };

  const handleCheckOut = () => {
    console.log("Checking out all selected items");
  };

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selItem) => selItem.productId !== item.productId));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const computeTotalCartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
};

const computeTotalPrice = () => {
  return selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};


  return (
    <div className="shopping-cart-page">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo Here" className="logo-img" />
        </Link>
      </div>
      <div className="nav-bar">
        <Link to="/orders" className="nav-link">ORDERS</Link>
        <Link to="/products" className="nav-link">PRODUCTS</Link>
        <Link to="/cart" className="nav-link">CART ({computeTotalCartQuantity()})</Link>
        <Link to="/about-us" className="nav-link">ABOUT US</Link>
        <Link to="/profile" className="user-profile">
          <img src={userIcon} alt="User icon" className="user-icon" />
        </Link>
      </div>
      <div className="title-container">
        <h1>Shopping Cart</h1>
      </div>
      <div className="item-list">
        {cart.map((item) => (
          <div key={item.productId} className="cart-item">
            <input
              type="checkbox"
              className="checkbox"
              id={`checkbox-${item.productId}`}
              checked={selectedItems.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            <label htmlFor={`checkbox-${item.productId}`} className="checkbox-label"></label>
            <div className='justify1'>
              <img className= "prod-img" src={item.img} alt={item.productName}/>
              <div className='name-qty'>
              <p className="itemname">{item.productName}</p>
              <p className='qty'>Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className='price-deliv'>
              <p className="itemprice">PHP {item.price}</p>
              <p className="deliv">Cash on delivery Only</p>
            </div>
            <div className='buttons'>
              <button className='remove' onClick={() => handleRemove(item)}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
            
          </div>
        ))}
      </div>
      <div className="total-checkout-container">
        <div className="total-checkout">
          <p className='total-p'> Total Price: PHP {computeTotalPrice()}</p>
          <button className='checkout' onClick={handleCheckOut}>Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
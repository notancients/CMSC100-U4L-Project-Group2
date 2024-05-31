import React, { useState, useEffect } from 'react';
import '../Styles/shoppingCart.css';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import userIcon from '../../images/user_icon.png';
import CustomCursor from '../../components/customCursor';
import axios from 'axios';
import CheckoutModal from './CheckoutModal';

function ShoppingCart({ }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let user_id = localStorage.getItem("user_id");


  console.log(user_id);
  useEffect( () => {
    console.log("Fetching cart data.");
    const fetch_data = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/get-all-products-in-cart?user_id=${user_id}`);
            // console.log(response);
            
            let response_cart = response.data.data;
            // console.log(response_cart);

            setCart(response_cart);
        } catch (err) {
            console.log(err.response);
            setCart([]);
        }
    }

    fetch_data();
}, []);


const handleRemove = async (item) => {
  const updatedCart = cart.filter(cartItem => cartItem.product_id !== item.product_id);

  try {
      await axios.delete(`http://localhost:3001/api/remove-from-cart`, {
          data: {
              user_id: localStorage.getItem("user_id"),
              product_id: item.product_id
          }
      });
      
      setCart(updatedCart);
      setSelectedItems(selectedItems.filter(selItem => selItem.product_id !== item.product_id));
  } catch (err) {
      console.log(err);
  }
};


const handleCheckOut = () => {
  console.log("Checking out all selected items");
  console.log(selectedItems);
  setIsModalOpen(true);
};
 const handleConfirmCheckout = async () => {
    const selectedProductIds = selectedItems.map(item => item.product_id);
    const selectedProductQuantities = selectedItems.reduce((acc, item) => {
      acc[item.product_id] = item.product_quantity;
      return acc;
    }, {});

    try {
      const response = await axios.post('http://localhost:3001/api/checkout', {
        user_id,
        products: selectedProductQuantities
      });
      if (response.data.success) {
        // Clear the selected items and cart
        setSelectedItems([]);
        setCart(cart.filter(item => !selectedProductIds.includes(item.product_id)));
        setIsModalOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };



  const handleCheckboxChange = (item) => {
    console.log("Adding to selected items: ", item);
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selItem) => selItem.product_id !== item.product_id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }

  };
  const computeTotalCartQuantity = () => {
    return cart.reduce((total, item) => total + item.product_quantity, 0);
};

const computeTotalPrice = () => {
  return selectedItems.reduce((total, item) => total + (item.price * item.product_quantity), 0);
};


  return (
    <div className="shopping-cart-page">
                  <CustomCursor />

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
          <img src={userIcon} alt="User icon" className="user-icon" />
        </Link>
      </div>
      <div className="title-container">
        <h1>Shopping Cart</h1>
      </div>
      <div className="item-list">
        {cart.map((item) => (
          <div key={item.product_id} className="cart-item">
            <input
              type="checkbox"
              className="checkbox"
              id={`checkbox-${item.product_id}`}
              checked={selectedItems.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            <label htmlFor={`checkbox-${item.product_id}`} className="checkbox-label"></label>
            <div className='justify1'>
              <img className= "prod-img" src={item.product_image} alt={item.product_name}/>
              <div className='name-qty'>
              <p className="itemname">{item.product_name}</p>
              <p className='qty'>Quantity: {item.product_quantity}</p>
              </div>
            </div>
            <div className='price-deliv'>
              <p className="itemprice">PHP {item.price}</p>
              <p className="deliv">Cash on delivery Only</p>
            </div>
            <div className="buttons">
            <button className='remove' onClick={() => handleRemove(item)}>
             <i className="fa fa-trash"></i>
            </button>
            </div>

            
          </div>
        ))}
      </div>
      <div className="total-checkout-container">
        <div className="total-checkout">
          <p className='total-p'> Total Price: PHP {computeTotalPrice()}.00</p>
          <button className='checkout' onClick={handleCheckOut}>Check Out</button>
        </div>
      </div>
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmCheckout}
        totalPrice={computeTotalPrice()}
      />
    </div>
  );
}

export default ShoppingCart;
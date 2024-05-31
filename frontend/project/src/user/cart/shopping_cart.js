import React, { useState, useEffect } from 'react';
import '../Styles/shoppingCart.css';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import userIcon from '../../images/user_icon.png';
import CustomCursor from '../../components/customCursor';
import axios from 'axios';
import { LogoutPrompt } from '../../frontend_network/authentication';

const SERVER = "localhost:3001";

let HEADER = {
  headers: {
    'authorization': `Bearer ${localStorage.getItem("token")}`
  }
}

function ShoppingCart() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let user_id = localStorage.getItem("user_id");

  useEffect(() => {
    console.log("Fetching cart data.");
    const fetch_data = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/get-all-products-in-cart?user_id=${user_id}`, HEADER);
        let response_cart = response.data.data;
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
      let response = await axios.delete(`http://localhost:3001/api/remove-from-cart?user_id=${user_id}&product_id=${item.product_id}`,
        HEADER);

      setCart(updatedCart);
      setSelectedItems(selectedItems.filter(selItem => selItem.product_id !== item.product_id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckOut = async () => {
    console.log("Checking out all selected items");
    try {
      const API_ADDRESS = `http://${SERVER}/api/checkout`;
      let request_body = {
        "user_id": localStorage.getItem("user_id"),
        "products": {}
      };

      if (selectedItems.length === 0) {
        return;
      }
      console.log(selectedItems);

      let products_to_checkout = {};
      selectedItems.forEach((item) => {
        let product_id_as_key = item.product_id;
        let product_quantity_as_value = item.product_quantity;

        products_to_checkout[product_id_as_key] = product_quantity_as_value;
      });

      request_body["products"] = { ...products_to_checkout };
      console.log(request_body);

      let response = await axios.post(
        API_ADDRESS,
        request_body,
        HEADER
      );

      console.log(response);

      if (response.data.success === true) {
        console.log("Successful checkout. Clearing all selected items.");

        let updated_cart = cart.filter((item) => {
          if (products_to_checkout[item.product_id] == null) {
            return item;
          }
        });

        console.log(updated_cart);
        setCart(updated_cart);
        setSelectedItems([]);
      }

    } catch (err) {
      console.log(["Checkout error", err]);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmCheckout = () => {
    handleCheckOut();
    closeModal();
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
        <Link to="/profile" className="user-profile">
          <img src={userIcon} alt="User icon" className="user-icon" />
        </Link>
        <LogoutPrompt />
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
              <img className="prod-img" src={item.product_image} alt={item.product_name} />
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
          <button className='checkout' onClick={openModal}>Check Out</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-co">
          <div className="modal-content-co">
            <h2>Confirm Checkout</h2>
            <p>Are you sure you want to checkout the selected items?</p>
            <div className="modal-buttons-co">
              <button className="modal-button-co" onClick={confirmCheckout}>Yes</button>
              <button className="modal-button-co" onClick={closeModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;

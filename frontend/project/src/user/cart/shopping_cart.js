import React, { useState, useEffect } from 'react';
import '../Styles/shoppingCart.css';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import userIcon from '../../images/user_icon.png';
import CustomCursor from '../../components/customCursor';
import axios from 'axios';

const SERVER = "localhost:3001"

let HEADER = {
  headers: {
    'authorization': `Bearer ${localStorage.getItem("token")}`
  }
}
  

function ShoppingCart({ }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [cart, setCart] = useState([]);
  let user_id = localStorage.getItem("user_id");

  // console.log(user_id);
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





  const handleCheckOut = async () => {
    console.log("Checking out all selected items");
    try {
      const API_ADDRESS = `http://${SERVER}/api/checkout`;
      let request_body = {
        "user_id": localStorage.getItem("user_id"),
        "products": {}
      };

      if(selectedItems.length === 0) {
        alert("You don't have any products in your cart to checkout.");
        return;
      }
      console.log(selectedItems);

      // prepare the request body
      let products_to_checkout = {};
      selectedItems.forEach( (item) => {
        let product_id_as_key = item.product_id;
        let product_quantity_as_value = item.product_quantity;

        products_to_checkout[product_id_as_key] = product_quantity_as_value;
      } );
      
      request_body["products"] = {...products_to_checkout};
      console.log(request_body);

      // send the request to the server
      let response = await axios.post(
        API_ADDRESS,
        request_body,
        HEADER
      );

      console.log(response);


      // handle the deletion of all items in the shopping cart that has been selected if
      // the response succeeds
      if(response.data.success == true) {
        alert("Successfully checked out your products.");
        console.log("Successful checkout. Clearing all selected items.");

        let updated_cart = cart.filter( (item) => {
          if(products_to_checkout[item.product_id] == null) {
            return item;
          }
        });

        console.log(updated_cart);
        setCart(updated_cart);
        setSelectedItems([]);
      }



    } catch (err) {
      alert("There was an error with checking out your products.");
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
    // console.log(selectedItems);
    // let addFlag = true;
    // let updatedList = selectedItems.map( (checked_item) => {
    //   if (item.product_id != checked_item.product_id) {
    //     return (checked_item);
    //   } else if (item.product_id == checked_item.product_id) {
    //     addFlag = false;
    //   };

    //   if(addFlag) updatedList.push(item);

    //   setSelectedItems(updatedList);
    // });

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
    </div>
  );
}

export default ShoppingCart;
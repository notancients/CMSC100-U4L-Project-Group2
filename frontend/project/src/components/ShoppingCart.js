import React from 'react';
import ProductListing from './ProductListing.js';
import '../css/ShoppingCart.css';


function ShoppingCart({ cart, setCart }) {

    const handleRemove = (item) => {
        const removeItem = cart.filter(remItem => remItem.productId !== item.productId);
        setCart(removeItem);
        console.log(`Removed ${item.productName} from cart`);
    };
    
    const handleBuyNow = (item) => {
        console.log(`Bought ${item.productName}`);
    };

  return(
    <div className="shopping-cart-page">
        <div className="cart-title">Shopping Cart</div>
        <div className="item-list">
            {cart.map((item) => (
            <div key={item.productId} className="cart-item">
                <img src={item.img} alt={item.productName}/>
                <p className="name">{item.productName}</p>
                <p className="price">PHP {item.price}</p>
                <button onClick={() => handleRemove(item)}>Remove</button>
                <button onClick={() => handleBuyNow(item)}>Buy Now</button>
            </div>
            ))}
        </div>
    </div>
  );
}

export default ShoppingCart;
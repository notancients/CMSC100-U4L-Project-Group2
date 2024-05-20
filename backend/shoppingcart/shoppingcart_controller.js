import ShoppingCart from "./shoppingcart_model.js";
import OrderTransaction from "../order_transaction/order_transaction_model.js";


async function addProductToCart({user_id, product_id, quantity}) {
    console.log("Adding products to a user's cart.");

    let shoppingcart;
    try {
        shoppingcart = await ShoppingCart.findOne({ "user_id":user_id });

        if (!shoppingcart) {
            shoppingcart = await ShoppingCart.create({
                "user_id" : user_id,
                "cart" : [
                    {
                        "product_id" : product_id,
                        "product_quantity" : quantity
                    }
                ]
            });
        } else { // This is for when the shopping cart exists
            const productIndex = shoppingcart.cart.findIndex((item) => item.product_id === product_id);
            
            if (productIndex !== -1) { // when the product exists in the cart
                shoppingcart.cart[productIndex].product_quantity += product_quantity;
            } else { // if the product doesn't exist in the cart yet
                shoppingcart.cart.push({"product_id": product_id, "product_quantity": quantity});
            }
        }
        
        // save the local changes to the database
        shoppingcart.save();

        return {
            "success" : true,
            "data": shoppingcart,
            "message": "The product has been successfully added to the cart."
        };

    } catch (err) {
        console.log(["There was an error: ", err]);
        return {
            "success": false,
            "data": err,
            "message": "There was an error in adding products to the cart."
        };
    }
}

async function getAllProductsInCart({user_id}) {
    console.log("Getting all products in user's cart.");

    try {
        const user_shoppingcart = await ShoppingCart.find({ "user_id":user_id });

        return {
            "success": true,
            "data": user_shoppingcart,
            "message": "Successfully retrieved a user's shopping cart."
        };

    } catch (err) {
        console.log(["There was an error: ", err]);
        return {
            "success": false,
            "data": err,
            "message": "There was an error in retrieving a user's shopping cart details."
        };
    }
}


// products here is an array of product id
async function confirmOrder({user_id, products}) {
    // 
    console.log("Confirming prodcuts in user's cart.");

    try {
        const user_shoppingcart = await ShoppingCart.find({ 
            "user_id":user_id, 
            "cart.product_id" : { $in : products}
        });
        

        

        return {
            "success": true,
            "data": user_shoppingcart,
            "message": "Successfully confirmed a user's order."
        };

    } catch (err) {
        console.log(["There was an error: ", err]);
        return {
            "success": false,
            "data": err,
            "message": "There was an error in retrieving a user's shopping cart details."
        };
    }
}

export {
    addProductToCart,
    getAllProductsInCart,
    confirmOrder
}
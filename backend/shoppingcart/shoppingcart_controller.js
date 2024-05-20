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
                shoppingcart.cart[productIndex].product_quantity += quantity;
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
async function checkout({user_id, products}) {
    // 
    console.log("Confirming prodcuts in user's cart.");

    try {
        const user_shoppingcart = await ShoppingCart.findOne({ "user_id":user_id });
        
        let cart = user_shoppingcart.cart;
        cart = cart.map( (element) => {
            // reduce the product's quantity if
            element.product_quantity -= (products[element.product_id] ? products[element.product_id] : 0);
            return element;
        })

        // update the shoppping cart with the new modified cart
        user_shoppingcart.cart = cart;

        // send the changes to the database
        await user_shoppingcart.save();

        //////////////////////////////////////////////////////////////////////////////
        // This part is for sending the order into the order transaction collection //
        //////////////////////////////////////////////////////////////////////////////
        console.log(typeof products);
        let transaction_array = []
        Object.keys(products).forEach(element => {
            let transaction_order = {};
            transaction_order["product_id"] = element;
            transaction_order["product_quantity"] = products[element];
            transaction_array.push(transaction_order);
        });

        let order = await OrderTransaction.create({
            "user_id" : user_id,
            "order_status": "Pending",
            "order" : transaction_array
        });


        return {
            "success": true,
            "data": [user_shoppingcart, order],
            "message": "Successfully confirmed a user's order."
        };

    } catch (err) { 
        console.log(["There was an error: ", err]);

        return {
            "success": false,
            "data": null,
            "message": "There was an error confirming a user's order. "
        };
    }
}

async function updateCartQuantity({user_id, product_id, quantity}) {

}

export {
    addProductToCart,
    getAllProductsInCart,
    checkout,
    updateCartQuantity
}
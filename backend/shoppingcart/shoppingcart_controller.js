import ShoppingCart from "./shoppingcart_model.js";
import ProductModel from "../product/product_model.js";
import OrderTransaction from "../order_transaction/order_transaction_model.js";
import mongoose from "mongoose";


async function addProductToCart({ user_id, product_id, quantity }) {
    console.log("Adding products to a user's cart.");

    try {
        let shoppingcart = await ShoppingCart.findOne({ user_id });

        if (!shoppingcart) {
            console.log("User doesn't have a shopping cart yet. Creating a shopping cart.");
            shoppingcart = await ShoppingCart.create({
                user_id,
                cart: []
            });
        }

        let productIndex = shoppingcart.cart.findIndex(item => item.product_id == product_id);

        if (productIndex === -1) { // if it doesn't exist
            console.log("Product does not exist in cart.");
            shoppingcart.cart.push({ product_id, product_quantity: quantity });
        } else { // if it exists
            console.log("Product exists in cart. Updating quantity.");
            shoppingcart.cart[productIndex].product_quantity += quantity;
        }

        await shoppingcart.save();

        return {
            success: true,
            data: shoppingcart,
            message: "The product has been successfully added to the cart."
        };

    } catch (err) {
        console.log(["There was an error: ", err]);
        return {
            success: false,
            data: err,
            message: "There was an error in adding products to the cart."
        };
    }
}


async function getAllProductsInCart({user_id}) {
    console.log("Getting all products in user's cart.");

    try {
        const user_shoppingcart = await ShoppingCart.findOne({ "user_id":user_id });

        if(!user_shoppingcart) {
            console.log("User does not have a shopping cart.", user_shoppingcart);
            return {
                success:false,
                data: null,
                message: "The user does not have a shopping cart yet."
            }
        }
        


        let cart = user_shoppingcart.cart;

        // console.log(user_shoppingcart);
        let modified_cart = [];

        // console.log(cart);
        modified_cart =  await Promise.all(
            cart.map(async (product) => {
                try {
                    let product_details = await ProductModel.findOne({ _id: product["product_id"] });
                    // console.log(product_details);
                    let {product_quantity} = product;
                    let {product_image, price, product_name} = product_details;
                    // console.log(product_image, price, product_name, product_quantity);
        
                    let new_product = {
                        "product_id": product_details["_id"],
                        "product_image": product_image, 
                        "price": price, 
                        "product_name": product_name, 
                        "product_quantity":product_quantity
                    }
        
                    // console.log(new_product);
        
                    return(new_product);
                } catch (err) {
                    console.log(["There was an error", err]);
                }
            })
        );

        return {
            "success": true,
            "data": modified_cart,
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
        // const user_shoppingcart = await ShoppingCart.findOne({ "user_id":user_id });
        // console.log(user_shoppingcart)
        // let cart = user_shoppingcart.cart;
        // cart = cart.map( (element) => {
        //     // reduce the product's quantity if
        //     element.quantity -= (products[element.product_id] ? products[element.product_id] : 0);
        //     return element;
        // });


        let products_to_delete = Object.keys(products);
        const delete_from_user_cart = await ShoppingCart.updateOne(
            {"user_id": user_id},
            { $pull: {
                cart : { product_id: { $in: products_to_delete } }
            } }
        )

        // // update the shoppping cart with the new modified cart
        // user_shoppingcart.cart = cart;
        
        // console.log(user_shoppingcart.cart);

        // // send the changes to the database
        // await user_shoppingcart.save();

        //////////////////////////////////////////////////////////////////////////////
        // This part is for sending the order into the order transaction collection //
        //////////////////////////////////////////////////////////////////////////////
        // console.log(typeof products);
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
            "data": [delete_from_user_cart, order],
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

async function removeProductFromCart({ user_id, product_id }) {
    console.log("Removing product from user's cart.");

    try {
        let shoppingcart = await ShoppingCart.findOne({ user_id });

        if (!shoppingcart) {
            return {
                success: false,
                message: "User does not have a shopping cart."
            };
        }

        shoppingcart.cart = shoppingcart.cart.filter(item => item.product_id != product_id);

        await shoppingcart.save();

        return {
            success: true,
            data: shoppingcart,
            message: "The product has been successfully removed from the cart."
        };

    } catch (err) {
        console.log(["There was an error: ", err]);
        return {
            success: false,
            data: err,
            message: "There was an error in removing the product from the cart."
        };
    }
}


export {
    addProductToCart,
    getAllProductsInCart,
    checkout,
    updateCartQuantity, 
    removeProductFromCart
}
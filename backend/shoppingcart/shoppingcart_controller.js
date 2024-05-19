import CartModel from "./shoppingcart_model.js";


async function addProductToCart({user_id, product_id, quantity}) {
    console.log("Adding products to a user's cart.");

    try {
        const user_shoppingcart = await CartModel.findOneAndUpdate(
            { user_id: userId, "cart.product_id": product_id },
            { 
                $inc: { "cart.$.product_quantity": quantity },
                $setOnInsert: { "cart.$.product_id": product_id }
            },
            { upsert: true }
        );

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
            "message": "There was an error in adding products to the cart."
        };
    }
}

async function getAllProductsInCart({user_id}) {
    console.log("Getting all products in user's cart.");

    try {
        const user_shoppingcart = await CartModel.find({ "user_id":user_id });

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



async function confirmOrder({user_id, products}) {
    // 
    console.log("Confirming prodcuts in user's cart.");

    try {
        const user_shoppingcart = await CartModel.find({ "user_id":user_id });

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

export {
    addProductToCart,
    getAllProductsInCart,
    confirmOrder
}
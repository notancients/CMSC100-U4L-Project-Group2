import {
    getAllProductsInCart
} from "../shoppingcart/shoppingcart_controller.js";


async function getAllProductsInCartAPI(req, res) {
    console.log("Get all products in cart API has been called.");

    const cartProducts_result = await updateProduct(req.query);

    if(cartProducts_result.success) {
        res.status(200).json(cartProducts_result);
    } else {
        res.status(500).json(cartProducts_result);
    }
}


export {
    getAllProductsInCartAPI
}
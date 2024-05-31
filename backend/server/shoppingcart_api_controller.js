import {
    getAllProductsInCart,
    addProductToCart,
    checkout,
    updateCartQuantity,
    removeProductFromCart
} from "../shoppingcart/shoppingcart_controller.js";


async function getAllProductsInCartAPI(req, res) {
    console.log("Get all products in cart API has been called.");

    const cartProducts_result = await getAllProductsInCart(req.query);

    if(cartProducts_result.success) {
        res.status(200).json(cartProducts_result);
    } else {
        res.status(500).json(cartProducts_result);
    }
}

async function addProductToCartAPI(req, res) {
    console.log("Add product to cart API has been called.");

    const addProduct_result = await addProductToCart(req.body);

    if(addProduct_result.success) {
        res.status(200).json(addProduct_result);
    } else {
        res.status(500).json(addProduct_result);
    }
}


async function checkoutAPI(req, res) {
    console.log("Confirm order API has been called.");

    const checkout_result = await checkout(req.body);

    if(checkout_result.success) {
        res.status(200).json(checkout_result);
    } else {
        res.status(500).json(checkout_result);
    }
}

async function updateCartQuantityAPI(req, res) {
    console.log("Update cart product API has been called.");

    const updateCartQuantity_result = await updateCartQuantity(req.body);

    if(reduceCartProduct_result.success) {
        res.status(200).json(updateCartQuantity_result);
    } else {
        res.status(500).json(updateCartQuantity_result);
    }
}


async function removeProductFromCartAPI(req, res) {
    const { user_id, product_id } = req.body;

    const result = await removeProductFromCart({ user_id, product_id });

    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(500).json(result);
    }
}

export {
    addProductToCartAPI,
    getAllProductsInCartAPI,
    checkoutAPI,
    updateCartQuantityAPI,
    removeProductFromCartAPI
};
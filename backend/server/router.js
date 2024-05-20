import express from "express";

import { 
    createNewUserAPI, 
    getAllUsersAPI, 
    loginAPI 
} from "./user_api_controller.js";

import { authenticateTokenMiddleware } from "../user/authentication.js";

import { populateUserDataAPI, populateProductAPI } from "../sample_data/populate_database.js";

import { 
    createProductAPI, 
    getAllProductsAPI, 
    updateProductAPI,
    reduceProductQuantityAPI
} from "./product_api_controller.js";

import {
    addProductToCartAPI,
    getAllProductsInCartAPI,
    confirmOrderAPI
} from "./shoppingcart_api_controller.js"




const router = express.Router();

// DEFAULT API

router.get("/", (req, res) => {
    res.send({
        "message": "Welcome to the home page"  
    });
});


// USER API

router.get("/api/get-all-users", authenticateTokenMiddleware, getAllUsersAPI);
router.post("/api/create-user", createNewUserAPI);
router.post("/api/login", loginAPI);

// USER POPULATE API

router.get("/api/populate-user-database", populateUserDataAPI);


// PRODUCT API
router.post("/api/create-product", createProductAPI);
router.get("/api/get-all-products", getAllProductsAPI);
router.put("/api/update-product-details", updateProductAPI);
router.patch("/api/reduce-product-quantity", reduceProductQuantityAPI);

// USER POPULATE API

router.get("/api/populate-product-database", populateProductAPI);


// SHOPPING CART API
router.post("/api/add-to-cart", addProductToCartAPI);
router.get("/api/get-all-products-in-cart", getAllProductsInCartAPI);
router.post("/api/confirm-order", confirmOrderAPI);



// TRANSACTION API

router.get("/api/get-all-transactions",);
router.post("/api/complete-transaction",);

export {
    router
}

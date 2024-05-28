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
    updateProductAPI
} from "./product_api_controller.js";

import {
    addProductToCartAPI,
    getAllProductsInCartAPI,
    checkoutAPI,
    updateCartQuantityAPI
} from "./shoppingcart_api_controller.js"

import {
    getAllUserTransactionAPI,
    adminGetAllTransactionAPI,
    userCancelOrderAPI,
    adminValidateOrderAPI,
    salesReportAPI
} from "./transaction_api_controller.js"


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

// POPULATE API
router.get("/api/populate-user-database", populateUserDataAPI);
router.get("/api/populate-product-database", populateProductAPI);



// PRODUCT API
router.post("/api/create-product", createProductAPI);
router.get("/api/get-all-products", getAllProductsAPI);
router.put("/api/update-product-details", updateProductAPI);



// SHOPPING CART API
router.post("/api/add-to-cart", addProductToCartAPI);
router.get("/api/get-all-products-in-cart", getAllProductsInCartAPI);
router.post("/api/checkout", checkoutAPI);
router.patch("/api/update-cart-product", updateCartQuantityAPI);




// TRANSACTION API
router.get("/api/get-all-user-transactions", getAllUserTransactionAPI);
router.get("/api/get-all-transactions", adminGetAllTransactionAPI);
router.patch("/api/user-cancel-order", userCancelOrderAPI);
router.patch("/api/admin-validate-order", adminValidateOrderAPI);
router.get("/api/sales-report", salesReportAPI);

export {
    router
}

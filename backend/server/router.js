import express from "express";

import { 
    createNewUserAPI, 
    getAllUsersAPI, 
    loginAPI 
} from "./user_api_controller.js";

import { authenticateTokenMiddleware, authorizeAdminMiddleware } from "../user/authentication.js";

import { populateUserDataAPI, populateProductAPI, populateTransactionHistoryAPI } from "../sample_data/populate_database.js";

import { 
    createProductAPI, 
    getAllProductsAPI, 
    updateProductAPI
} from "./product_api_controller.js";

import {
    addProductToCartAPI,
    getAllProductsInCartAPI,
    checkoutAPI,
    updateCartQuantityAPI,
    removeProductFromCartAPI
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

router.post("/auth-test", authenticateTokenMiddleware, authorizeAdminMiddleware, (req, res) => {
    console.log("You have managed to pass the authentication test.");
    console.log(req.user);
    res.status(200).json(req.user);
})


// USER API

router.get("/api/get-all-users", getAllUsersAPI);
router.post("/api/create-user", createNewUserAPI);
router.post("/api/login", loginAPI);

// POPULATE API
router.get("/api/populate-user-database", authenticateTokenMiddleware, authorizeAdminMiddleware, populateUserDataAPI);
router.get("/api/populate-product-database", authenticateTokenMiddleware, authorizeAdminMiddleware, populateProductAPI);
router.get("/api/populate-transactions", authenticateTokenMiddleware, authorizeAdminMiddleware, populateTransactionHistoryAPI);


// PRODUCT API
router.post("/api/create-product", authenticateTokenMiddleware, authorizeAdminMiddleware, createProductAPI);
router.get("/api/get-all-products", authenticateTokenMiddleware, getAllProductsAPI);
router.put("/api/update-product-details", authenticateTokenMiddleware, authorizeAdminMiddleware, updateProductAPI);



// SHOPPING CART API
router.post("/api/add-to-cart", authenticateTokenMiddleware, addProductToCartAPI);
router.get("/api/get-all-products-in-cart", authenticateTokenMiddleware, getAllProductsInCartAPI);
router.post("/api/checkout", authenticateTokenMiddleware, checkoutAPI);
router.patch("/api/update-cart-product", authenticateTokenMiddleware, updateCartQuantityAPI);
router.delete("/api/remove-from-cart", authenticateTokenMiddleware, removeProductFromCartAPI);




// TRANSACTION API
router.get("/api/get-all-user-transactions", authenticateTokenMiddleware, getAllUserTransactionAPI);
router.get("/api/get-all-transactions", authenticateTokenMiddleware, authorizeAdminMiddleware, adminGetAllTransactionAPI);
router.patch("/api/user-cancel-order", authenticateTokenMiddleware, userCancelOrderAPI);
router.patch("/api/admin-validate-order", authenticateTokenMiddleware, authorizeAdminMiddleware, adminValidateOrderAPI);
router.get("/api/sales-report", authenticateTokenMiddleware, authorizeAdminMiddleware, salesReportAPI);

export {
    router
}
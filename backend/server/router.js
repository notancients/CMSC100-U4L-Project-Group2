import express from "express";

import { 
    createNewUserAPI, 
    getAllUsersAPI, 
    loginAPI 
} from "./user_api_controller.js";



import { populateUserDataAPI } from "../sample_data/populate_database.js";




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
router.get("/api/get-all-products",);


// SHOPPING CART API
router.get("/api/get-all-products-in-cart",);
router.post("/api/confirm-order",);



// TRANSACTION API

router.get("/api/get-all-transactions",);
router.post("/api/complete-transaction",);

export {
    router
}

import express from "express";



const router = express.Router();

// DEFAULT API

router.get("/", (req, res) => {
    res.send({
        "message": "Welcome to the home page"  
    });
});


// USER API

router.get("/api/get-all-users",);
router.post("/post/create-user",);

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

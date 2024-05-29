import { registerNewUser } from "../user/user_controller.js";
import { addProduct } from "../product/product_controller.js";
import { USER_SAMPLE_DATA } from "./user_sample_data.js";
import { PRODUCT_SAMPLE_DATA } from "./product_sample_data.js";
import ProductModel from '../product/product_model.js';
import TransactionHistoryModel from "../order_transaction/transaction_history_model.js";

async function populateUserData(userArray) {
    userArray.forEach(element => {
        registerNewUser(element);
    });
}

async function populateUserDataAPI(req, res) {
    console.log("Populating the user database.")
    await populateUserData(USER_SAMPLE_DATA);
    res.send({
        "success":true,
        "data": null,
        "message": "The user database has been populated."
    })
}

async function populateProductData(productArray) {
    productArray.forEach(element => {
        addProduct(element);
    });
}

async function populateProductAPI(req, res) {
    console.log("Populating the product database.");
    await populateProductData(PRODUCT_SAMPLE_DATA);
    res.send({
        "success":true,
        "data": null,
        "message": "The product database has been populated."
    });
}

async function populateTransactionHistory() {
    const ALL_PRODUCTS = await ProductModel.find();
    ALL_PRODUCTS.map(async (product) => {
        let new_product = await TransactionHistoryModel.create({
            "user_id": "664d593b39abbc8ff1d4204e",
            "product_id": product["_id"],
            "date_sold" : "2024-05-25T23:33:22.550+00:00",
            "quantity_sold": 1
        });
        console.log(new_product);
    })
}

async function populateTransactionHistoryAPI(req, res) {
    console.log("Populating the product database.");
    await populateTransactionHistory();
    res.send({
        "success":true,
        "data": null,
        "message": "The product database has been populated."
    });
}

export {
    populateUserDataAPI,
    populateProductAPI,
    populateTransactionHistoryAPI
}
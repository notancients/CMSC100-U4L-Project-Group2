import { addProduct, getAllProducts } from "../product/product_controller.js";

async function createProductAPI(req, res) {
    console.log("Create product API has been called.");

    const addProduct_result = await addProduct(req.body);

    if(addProduct_result) {
        res.status(200).json(addProduct_result);
    } else {
        res.status(500).json(addProduct_result);
    }
}

async function getAllProductsAPI(req, res) {
    console.log("Get all products API has been called.");

    const getAllProducts_result = await getAllProducts();

    if(getAllProducts_result) {
        res.status(200).json(getAllProducts_result);
    } else {
        res.status(500).json(getAllProducts_result);
    }
}

export {
    getAllProductsAPI,
    createProductAPI
}
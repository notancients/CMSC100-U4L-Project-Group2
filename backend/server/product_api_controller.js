import { addProduct, getAllProducts, updateProduct } from "../product/product_controller.js";

async function createProductAPI(req, res) {
    console.log("Create product API has been called.");

    const addProduct_result = await addProduct(req.body);

    if(addProduct_result.success) {
        res.status(200).json(addProduct_result);
    } else {
        res.status(500).json(addProduct_result);
    }
}

async function getAllProductsAPI(req, res) {
    console.log("Get all products API has been called.");

    const getAllProducts_result = await getAllProducts();

    if(getAllProducts_result.success) {
        res.status(200).json(getAllProducts_result);
    } else {
        res.status(500).json(getAllProducts_result);
    }
}

async function updateProductAPI(req, res) {
    console.log("Update product API has been called.");

    const upateProduct_result = await updateProduct(req.body);

    if(upateProduct_result.success) {
        res.status(200).json(upateProduct_result);
    } else {
        res.status(500).json(upateProduct_result);
    }
}

export {
    getAllProductsAPI,
    createProductAPI,
    updateProductAPI
}
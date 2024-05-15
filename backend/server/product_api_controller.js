import { 
    addProduct, 
    getAllProducts, 
    updateProduct, 
    reduceProductQuantity 
} from "../product/product_controller.js";

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

async function reduceProductQuantityAPI(req, res) {
    console.log("Reduce product quantity api has been called.");

    const reduceQuantity_result = await reduceProductQuantity(req.body);
    
    if(reduceQuantity_result.success) {
        res.status(200).json(reduceQuantity_result);
    } else {
        res.status(500).json(reduceQuantity_result);
    }
}

export {
    getAllProductsAPI,
    createProductAPI,
    updateProductAPI,
    reduceProductQuantityAPI
}
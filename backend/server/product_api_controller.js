import { getAllProducts } from "../product/product_controller.js";

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
    getAllProductsAPI
}
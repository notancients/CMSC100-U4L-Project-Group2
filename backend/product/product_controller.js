import ProductModel from "./product_model.js";

async function getAllProducts() {
    console.log("Retrieving all products.");

    try {
        const all_products = ProductModel.find();
        return({
            "success":true,
            "data": all_products,
            "message": "Successfully retrieved all products."
        });

    } catch(err) {
        return({
            "success":false,
            "data":err,
            "message": "There has been an error when retrieving all products."
        });
    }

}

export {
    getAllProducts
}
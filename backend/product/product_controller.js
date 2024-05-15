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

async function addProduct({product_name, product_description, product_type, product_quantity, price}) {
    console.log("Adding a new product.");

    try{

        const newProduct = await ProductModel(
            {
                "product_name": product_name,
                "product_description": product_description,
                "product_type": product_type,
                "product_quantity": product_quantity,
                "price": price
            }
        )

        const created_product = await newProduct.save();

        return {
            success: true, 
            data: created_product, 
            message:[]
        }

    } catch (err) {
        console.log('Error: ', err);
        return {
            success: false, 
            data: null, 
            message:['An error occured while creating a product',err]
        };
    }

}

export {
    getAllProducts,
    addProduct
}
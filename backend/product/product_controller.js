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

async function updateProduct({product_id, product_name, product_description, product_type, product_quantity, price}) {
    console.log("A product is being updated.");

    try {

        const existing_product = await ProductModel.findOne({ "_id":product_id });
        if(!existing_product) {
            return {
                "success": false,
                "data": null,
                "message": "The product id given does not exist."
            }
        };

        const updated_product = await ProductModel.findOneAndUpdate(
            {"_id":product_id},
            {
                "product_name": product_name,
                "product_description": product_description,
                "product_type": product_type,
                "product_quantity": product_quantity,
                "price": price
            }
        );

        return {
            "success": true,
            "data":updated_product,
            "message": "The product has been updated successfully."
        };
    } catch(err) {
        console.log('Error: ', err);
        return {
            success: false, 
            data: null, 
            message:['An error occured while updating a product',err]
        };
    }
}

export {
    getAllProducts,
    addProduct,
    updateProduct
}
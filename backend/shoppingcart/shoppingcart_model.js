import mongoose from "mongoose";

const ShoppingCart = mongoose.model(
    'ShoppingCart', {
        "user": ObjectId,
        "product_id": String,
        "quantity": Number
    }, "cartData"
)

export {
    ShoppingCart
}
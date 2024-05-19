import mongoose from "mongoose";


const shoppingCartSubSchema = new mongoose.Schema({
    "product_id": {type: String, required:true},
    "product_quantity": {type: Number, required: true}
})

const shoppingCartSchema = new mongoose.Schema({
    // Schema of the products model
    "user_id": {type: mongoose.Schema.ObjectId, required: true},
    "cart": [shoppingCartSubSchema]
});

export default mongoose.model('shoppingcart', shoppingCartSchema);
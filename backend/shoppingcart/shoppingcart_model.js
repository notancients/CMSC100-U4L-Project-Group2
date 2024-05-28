import mongoose from "mongoose";


const shoppingCartSubSchema = new mongoose.Schema({
    "product_id": {type: mongoose.Schema.ObjectId, required:true},
    "product_quantity": {type: Number, required: true}
})


const shoppingCartSchema = new mongoose.Schema({
    // Schema of the products model
    "user_id": {type: mongoose.Schema.ObjectId, required: true},
    "cart": [shoppingCartSubSchema]
});

shoppingCartSchema.pre('save', function (next) {
    // Remove items with quantity zero
    this.cart = this.cart.filter(item => item.product_quantity > 0);
    next();
});

export default mongoose.model('shoppingcart', shoppingCartSchema);
import mongoose from 'mongoose';

const PRODUCT_TYPES = ["Eggs", "Pork", "Chicken", "Beef", "Dairy", "Vegetables",
    "Fruits", "Flowers", "Decorative Plants", "Arts and Crafts", "Baked Goods",
    "Jams", "Juices", "Processed Meats", "Others"
];

const productSchema = new mongoose.Schema({
    // Schema of the products model
    product_name: {type: String, required: true},
    product_description: {type: String, required: true},
    product_type: {type: String, required: true, enum: PRODUCT_TYPES},
    product_quantity: {type: Number, required: true},
    price: {type: Number, required: true}
});

export default mongoose.model('products', productSchema);
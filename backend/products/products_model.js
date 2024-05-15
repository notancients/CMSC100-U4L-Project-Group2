import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    // Schema of the users model
    product_name: {type: String, required: true},
    product_description: {type: String, required: true},
    product_type: {type: String, required: true},
    product_quantity: {type: Integer, required: true},
    price: {type: Integer, required: true}
});

export default mongoose.model('products', productSchema);
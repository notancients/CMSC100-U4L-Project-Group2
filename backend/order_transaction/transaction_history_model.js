import mongoose from 'mongoose'


const transactionHistorySchema = new mongoose.Schema(
    {
        // Schema of the order transaction model
        "user_id": {type: mongoose.Schema.ObjectId, required: true},
        "product_id": {type: mongoose.Schema.ObjectId, required: true},
        "date_sold" : {type: Date, required: true},
        "quantity_sold": {type: Number, required: true},
        "price_total": {type: Number, required: true}
    }
);

export default mongoose.model('transactionrecord', transactionHistorySchema);
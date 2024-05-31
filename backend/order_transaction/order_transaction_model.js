import mongoose from 'mongoose'

const ORDER_STATUS_ENUM = ["Completed", "Cancelled", "Pending"];

const submittedOrderSchema = new mongoose.Schema({
    "product_id": {type: String, required:true},
    "product_quantity": {type: Number, required: true}
}) 

const orderTransactionSchema = new mongoose.Schema(
    {
        // Schema of the order transaction model
        "user_id": {type: mongoose.Schema.ObjectId, required: true},
        "order_status" : {type: String, required: true, enum: ORDER_STATUS_ENUM},
        "order" : [submittedOrderSchema],
    },
    {
        timestamps: true
    }
);

export default mongoose.model('ordertransaction', orderTransactionSchema);
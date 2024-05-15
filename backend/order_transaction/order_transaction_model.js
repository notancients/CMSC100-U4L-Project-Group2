import mongoose from 'mongoose'

const orderTransaction = mongoose.model(
    'ordertransaction',
    {
        "transactionid": String,
        "productid": String,
        "orderquantity": Number,
        "orderstatus": Number,
        "email": String,
        "dateordered": Date,
        //"time":TimeRanges,
        timestamps: true,
    },
    "ordertransactiondatas"
)

export {orderTransaction}
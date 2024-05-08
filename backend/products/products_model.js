import mongoose from 'mongoose';


const Product = mongoose.model(
    'Product',
    {
        "productId": String,
        "productName": String,
        "productDescription": String,
        "productType": Number,      // (eg: 1 Crop / 2 Poultry)
        "productQuantity": Number

    },
    'ProductData'
);

export {Product};
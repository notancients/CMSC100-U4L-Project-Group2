import OrderTransaction from "./order_transaction_model.js";
import TransactionHistory from "./transaction_history_model.js";
import ProductModel from "../product/product_model.js";

import { sumArray } from "./transaction_utility.js";

async function getAllUserTransaction({user_id}) {
    console.log("Getting all transactions for the user.");


    try {

        const pending_user_orders = await OrderTransaction.find(
            { "user_id":user_id , "order_status" : "Pending" }
        );

        const completed_user_orders = await OrderTransaction.find(
            { "user_id":user_id , "order_status" : "Completed" }
        );

        const cancelled_user_orders = await OrderTransaction.find(
            { "user_id":user_id , "order_status" : "Cancelled" }
        );
        
        return {
            "success": true,
            "data" : {
                "pending": pending_user_orders,
                "completed": completed_user_orders,
                "cancelled": cancelled_user_orders
            },
            "message": "Successfully returned all orders by the user."
        }

    } catch (err) {
        console.log(["There was an error: ", err]);

        return {
            "success": false,
            "data": err,
            "message": "There was an error getting all transactions made by the user."
        }
    }
}

async function adminGetAllTransaction() {
    console.log("Getting all transactions for all users.");

    try {

        const pending_orders = await OrderTransaction.find(
            { "order_status" : "Pending" }
        );

        const completed_orders = await OrderTransaction.find(
            { "order_status" : "Completed" }
        );

        const cancelled_orders = await OrderTransaction.find(
            { "order_status" : "Cancelled" }
        );

        // pending = pending.map( async (element) => {
        //     element["order"].forEach(async product => {
        //         product["product_name"] = (await ProductModel.find({product_id: product["product_id"]})).product_name;
        //     });
        // })
        
        return {
            "success": true,
            "data" : {
                "pending": pending_orders,
                "completed": completed_orders,
                "cancelled": cancelled_orders
            },
            "message": "Successfully returned all orders by the user."
        }

    } catch (err) {
        console.log(["There was an error: ", err]);

        return {
            "success": false,
            "data": err,
            "message": "There was an error getting all transactions made by all users."
        }
    }
}

async function userCancelOrder({order_id}) {
    console.log("Marking a user's order as cancelled.");

    try {

        const cancel_order = await OrderTransaction.findOneAndUpdate(
            {"_id": order_id},
            {"order_status" : "Cancelled"}
        );
        
        return {
            "success": true,
            "data" : cancel_order,
            "message": "Successfully cancelled an order by the user."
        }

    } catch (err) {
        console.log(["There was an error: ", err]);

        return {
            "success": false,
            "data": err,
            "message": "There was an error cancelling an order for the user."
        }
    }
}

async function adminValidateOrder({order_id, order_status}) {
    console.log("Marking a user's order as cancelled.");

    try {

        const validated_order = await OrderTransaction.findOneAndUpdate(
            {"_id": order_id},
            {"order_status" : order_status}
        );
    
        const updated_order = await OrderTransaction.findOne({"_id": order_id});
    
        if (order_status == "Completed") {
            updated_order["order"].map( async (element) => {

                let record_transaction = await TransactionHistory.create({
                    "user_id": updated_order["user_id"],
                    "product_id": element["product_id"],
                    "date_sold" : updated_order["updatedAt"],
                    "quantity_sold": element["product_quantity"]
                })

                console.log(record_transaction);
            })
        }
        
        return {
            "success": true,
            "data" : updated_order,
            "message": "Successfully validated an order for a user."
        }

    } catch (err) {
        console.log(["There was an error: ", err]);

        return {
            "success": false,
            "data": err,
            "message": "There was an error validating an order for a user."
        }
    }
}

// returns the weekly sales report for products for the last 52 weeks
async function salesReport({product_id, time_period}) {
    console.log("Retrieving the sales report.");

    let time_limiter;
    switch (time_period) {
        case "Week": time_limiter = new Date(new Date() - 7 * 24 * 60 * 60 * 1000); break;
        case "Month": time_limiter = new Date(new Date() - 31 * 24 * 60 * 60 * 1000); break;
        case "Year": time_limiter = new Date(new Date() - 365 * 24 * 60 * 60 * 1000); break;
        // 5Minutes is for testing purposes
        case "5Minutes" : time_limiter = new Date(new Date() - 5 * 60 * 1000); break;
    }

    console.log(product_id);
    const sales_report = await TransactionHistory.aggregate([
        { $match: {
            date_sold: { $gte: time_limiter },
        } },
        { $group: 
            {
                _id: {
                    product_id: '$product_id',
                    day: { $dayOfYear: '$date_sold' }
                },
                totalQuantitySold: { $sum: "$quantity_sold" }
            }
        },
        {
            $project: {
                _id: 1,
                // product_id: '$_id',
                totalQuantitySold: 1
            }
        }
    ]);

    console.log(product_id);
    let process_data = sales_report.filter((element) => {
        console.log(["Product id in array:", element["_id"].product_id].toString());
        if(element["_id"]["product_id"].toString() == product_id) {
            return element["totalQuantitySold"];
        }
    });

    let total = process_data.map( (element) => {
        return element["totalQuantitySold"];
    })

    total = sumArray(total);
    console.log(total);

    let product = await ProductModel.findOne( { _id: product_id } );
    let price = product.price;

    let report_for_product = {
        "product_id" : product_id,
        "total_sold" : total,
        "total_sales": total*price,
        "price": price,
        "time_period": time_period
    }

    return {
        "success": true,
        "data": report_for_product,
        "message": "Successfully returned the sale report."
    }

} 

export {
    getAllUserTransaction,
    adminGetAllTransaction,
    userCancelOrder,
    adminValidateOrder,
    salesReport
}
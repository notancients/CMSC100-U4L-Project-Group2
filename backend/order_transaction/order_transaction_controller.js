import OrderTransaction from "./order_transaction_model.js";
import TransactionHistory from "./transaction_history_model.js";

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

// returns the monthly sales report for products for the last 12 months
async function monthlySalesReport() {

}

// returns the weekly sales report for products for the last 52 weeks
async function weeklySalesReport() {

}

// return the sales for products for the last 5 years
async function yearlySalesReport() {

}

export {
    getAllUserTransaction,
    adminGetAllTransaction,
    userCancelOrder,
    adminValidateOrder,
    monthlySalesReport,
    weeklySalesReport,
    yearlySalesReport
}
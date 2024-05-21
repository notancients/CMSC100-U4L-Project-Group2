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

    }
}

async function adminGetAllTransaction() {

}

async function userCancelOrder() {

}

async function adminValidateOrder() {

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
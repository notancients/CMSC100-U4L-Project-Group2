import {
    getAllUserTransaction,
    adminGetAllTransaction,
    userCancelOrder,
    adminValidateOrder,
    monthlySalesReport,
    weeklySalesReport,
    yearlySalesReport
} from "../order_transaction/order_transaction_controller.js";

async function getAllUserTransactionAPI(req, res) {
    console.log("Get all user transaction API has been called.");

    const getAllUserTransaction_result = await getAllUserTransaction(req.query);

    if(getAllUserTransaction_result.success) {
        res.status(200).json(getAllUserTransaction_result);
    } else {
        res.status(500).json(getAllUserTransaction_result);
    }
}

async function adminGetAllTransactionAPI(req, res) {
    console.log("Get all (admin) user transaction API has been called.");

    const adminGetAllTransaction_result = await adminGetAllTransaction(req.query);

    if(adminGetAllTransaction_result.success) {
        res.status(200).json(adminGetAllTransaction_result);
    } else {
        res.status(500).json(adminGetAllTransaction_result);
    }
}

async function userCancelOrderAPI(req, res) {
    console.log("User cancel order API has been called.");

    const userCancelOrder_result = await userCancelOrder(req.body);

    if(userCancelOrder_result.success) {
        res.status(200).json(userCancelOrder_result);
    } else {
        res.status(500).json(userCancelOrder_result);
    }
}

async function adminValidateOrderAPI(req, res) {
    console.log("Admin validate order API has been called.");

    const adminValidateOrder_result = await adminValidateOrder(req.body);

    if(adminValidateOrder_result.success) {
        res.status(200).json(adminValidateOrder_result);
    } else {
        res.status(500).json(adminValidateOrder_result);
    }
}

async function monthlySalesReportAPI(req, res) {
    console.log("Monthly sales report API has been called.");

    const monthlySalesReport_result = await monthlySalesReport();

    if(monthlySalesReport_result.success) {
        res.status(200).json(monthlySalesReport_result);
    } else {
        res.status(500).json(monthlySalesReport_result);
    }
}

async function weeklySalesReportAPI(req, res) {
    console.log("Weekly sales report API has been called.");

    const weeklySalesReport_result = await weeklySalesReport();

    if(weeklySalesReport_result.success) {
        res.status(200).json(weeklySalesReport_result);
    } else {
        res.status(500).json(weeklySalesReport_result);
    }
}

async function yearlySalesReportAPI(req, res) {
    console.log("Yearly sales report API has been called.");

    const yearlySalesReport_result = await yearlySalesReport();

    if(yearlySalesReport_result.success) {
        res.status(200).json(yearlySalesReport_result);
    } else {
        res.status(500).json(yearlySalesReport_result);
    }
}

export {
    getAllUserTransactionAPI,
    adminGetAllTransactionAPI,
    userCancelOrderAPI,
    adminValidateOrderAPI,
    monthlySalesReportAPI,
    weeklySalesReportAPI,
    yearlySalesReportAPI
}
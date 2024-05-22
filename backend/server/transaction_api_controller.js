import {
    getAllUserTransaction,
    adminGetAllTransaction,
    userCancelOrder,
    adminValidateOrder,
    salesReport
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


async function salesReportAPI(req, res) {
    console.log("Sales report API has been called.");

    const salesReport_result = await salesReport(req.query);

    if(salesReport_result.success) {
        res.status(200).json(salesReport_result);
    } else {
        res.status(500).json(salesReport_result);
    }
}


export {
    getAllUserTransactionAPI,
    adminGetAllTransactionAPI,
    userCancelOrderAPI,
    adminValidateOrderAPI,
    salesReportAPI
}
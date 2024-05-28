import {
    getAllUsers,
    logIn,
    registerNewUser
} from "../user/user_controller.js";

async function createNewUserAPI(req, res) {
    console.log("Create new user api has been called.");

    console.log(req.body);

    const createUser_result = await registerNewUser(req.body);

    console.log(createUser_result);

    res.send(createUser_result);
}

async function loginAPI(req, res) {
    console.log("Login API has been called.");

    const login_result = await logIn(req.body);

    console.log(login_result);

    res.send(login_result);
}

async function getAllUsersAPI(req, res) {
    console.log("Get All Users API has been called.");
    
    const getAllUsers_result = await getAllUsers();

    console.log(getAllUsers_result);
    
    res.send(getAllUsers_result);
}

export {
    createNewUserAPI,
    loginAPI,
    getAllUsersAPI
}
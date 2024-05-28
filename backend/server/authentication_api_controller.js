import {
    registerNewUser
} from "../user/user_controller.js";

async function loginAPI(req, res) {
    console.log("User is logging in.");

    console.log(req.body);

    const createUser = await login(req.body);
    console.log("After createuser in api");
    console.log(createUser);
    res.send(createUser);
}

export {
    createNewUserAPI
}
import {
    registerNewUser
} from "../user/user_controller.js";

async function createNewUserAPI(req, res) {
    console.log("Create new user api has been called.");

    console.log(req.body);

    const createUser = await registerNewUser(req.body);
    console.log("After createuser in api");
    console.log(createUser);
    res.send(createUser);
}

export {
    createNewUserAPI
}
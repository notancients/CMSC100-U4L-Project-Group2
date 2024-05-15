import { registerNewUser } from "../user/user_controller.js";
import { USER_SAMPLE_DATA } from "./user_sample_data.js";

async function populateUserData(userArray) {
    userArray.forEach(element => {
        registerNewUser(element);
    });
}

async function populateUserDataAPI(req, res) {
    console.log("Populating the user database.")
    await populateUserData(USER_SAMPLE_DATA);
    res.send({
        "success":true,
        "data": null,
        "message": "The user database has been populated."
    })
}

export {
    populateUserDataAPI
}
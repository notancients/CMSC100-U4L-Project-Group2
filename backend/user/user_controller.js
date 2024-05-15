import { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import UserModel from './user_model.js';

const SALT = 10;

async function registerNewUser({first_name, middle_name, last_name, email, password}) {
    console.log("Registering a new user.");
    console.log(first_name, middle_name, last_name, email, password);
    const existing_user_response = {
        "success": false,
        "data": null,
        "message": "A user already exists for that email."
    };


    try{
        const existing_user = await UserModel.findOne({ email: email });
        console.log(existing_user);
        if (existing_user) {
            return existing_user_response;
        }

        const encryptedPassword = await bcrypt.hash(password, SALT);
        console.log(encryptedPassword);

        const newUser = await UserModel(
            {
                "first_name": first_name,
                "middle_name": middle_name,
                "last_name": last_name,
                "email": email,
                "password": encryptedPassword,
                "user_type": "User",
            }
        )

        const created_account = await newUser.save();

        return {
            success: true, 
            data: created_account, 
            message:[]
        }

    } catch (err) {
        console.log('error: ', err);
        return {
            success: false, 
            data: null, 
            message:['An error occured while creating a cause',err]
        };
    }
}

async function createAdmin({fname, mname, lname, email, password}) {
    
}

async function getAllUsers() {

}

async function logIn({email, password}) {
    console.log("User is logging in.")
}

async function deleteUser() {

}

async function getUser() {

}

export {
    registerNewUser,
    createAdmin,
    getAllUsers,
    logIn,
    deleteUser,
    getUser
}
import { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import UserModel from './user_model';

const SALT = 10;

async function registerNewUser({first_name, middle_name, last_name, email, password}) {
    console.log("Registering a new user.");
    
    const existing_user_response = {
        "success": false,
        "data": null,
        "message": "A user already exists for that email."
    };


    try{
        const existing_user = await User.findOne({ email: user.email });

        if (existing_user) {
            return existing_user_response;
        }

        const encryptedPassword = bcrypt.hash(password, SALT);

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

        const created_account = await UserModel.save(newUser);

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
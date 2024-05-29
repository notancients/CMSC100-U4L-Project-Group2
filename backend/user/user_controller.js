import { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
import UserModel from './user_model.js';
import jwt from "jsonwebtoken";

dotenv.config();

const SALT = 10;
const SECRET_KEY = process.env.SECRET_KEY;

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
        console.log('Error: ', err);
        return {
            success: false, 
            data: null, 
            message:['An error occured while creating a user',err]
        };
    }
}

async function createAdmin({fname, mname, lname, email, password}) {
    
}

async function getAllUsers() {
    console.log("Getting all users.");

    try {

        const all_users = await UserModel.find().select('-password');

        return {
            "success": true, 
            "data": all_users, 
            "message": "Succesfully fetched all users."
        };

    } catch(err) {

        console.log('Error: ', err);

        return {
            "success": false, 
            "data": null, 
            "message":['An error occured while fetching all users.', err]
        };
    }
}

async function logIn({email, password}) {
    console.log("User is logging in.");

    const non_existing_user_response = {
        "success": false,
        "data": null,
        "message": "A user does not exist for that email."
    };

    try {
        const existing_user = await UserModel.findOne({ email: email });

        if (!existing_user) {
            return non_existing_user_response;
        }

        const isPasswordValid = await bcrypt.compare(password, existing_user.password)
        
        if(!isPasswordValid) {
            return {
                "success": false,
                "data": null,
                "message": "Invalid password."
            };
        }

        const token = jwt.sign(
            { 
                userId: existing_user._id,
                user_type: existing_user.user_type 
            },
            SECRET_KEY, 
            { expiresIn: '1hr' }
        )
        
        return {
            "success": true,
            "data": {
                "user_id": existing_user._id,
                "user_type": existing_user.user_type,
                "token": token
            },
            "message": "Successfully logged in."
        };

    } catch (err) {

        console.log('Error: ', err);

        return {
            success: false, 
            data: null, 
            message:['An error occured while creating a user',err]
        };
    }
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
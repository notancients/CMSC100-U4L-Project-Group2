import mongoose from "mongoose";

const User = mongoose.model('User',
    {
      "fname":String,
      "mname":String,
      "lname":String,
      "userType":String,
      "email":String,
      "password":String
    }, 'userData'
)

export {User};
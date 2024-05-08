import mongoose from "mongoose";

const User = mongoose.model('User',
    {
      "fname":String,
      "mname":String,
      "lname":String,
      "userType":String,
      "email":String,
      "password":String,
      "cartID":ObjectId
    }, 'userData'
)

export {User};
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

const userSchema = new mongoose.Schema({
  // Schema of the users model
  first_name: {type: String, require: true},
  middle_name: {type: String, require: true},
  last_name: {type: String, require: true},
  user_type:String,
  email: {type: String, required: true},
  password: {type: String, minlength: 8, required: true},
  user_type: {type: String, required: true, enum: ["User", "Admin"]},
});

const userModel = new mongoose.Model('Users', userSchema);


export default userModel;
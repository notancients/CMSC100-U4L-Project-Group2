import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // Schema of the users model
  first_name: {type: String, require: true},
  middle_name: {type: String, require: true},
  last_name: {type: String, require: true},
  email: {type: String, required: true},
  password: {type: String, minlength: 8, required: true},
  user_type: {type: String, required: true, enum: ["User", "Admin"]},
});

const UserModel = new mongoose.Model('Users', userSchema);


export default UserModel;
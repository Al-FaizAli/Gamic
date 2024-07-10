import mongoose from "mongoose";
import validator from "validator";
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Invalid Email']
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: [validator.isMobilePhone, 'Invalid Phone Number']
    },
});
const userModel = mongoose.model('users', UserSchema)
export default userModel

// const user = new userModel({
//     name: "Al Faiz Ali",
//     email: 'alfaiz@gmail.com',
//     password: '123456'
// })
// await user.save()

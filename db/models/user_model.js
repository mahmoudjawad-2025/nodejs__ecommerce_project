import { Schema, model } from "mongoose";
import mongoose from "mongoose";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - User Schema Definition

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 4
    },
    confirmEmail: {
        type: Boolean,
        default: false,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User',
    },
    image: {
        type: Object,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    sendCode: {
        type: String,
        default: null,
    }
}, { timestamps: true });

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Model

const UserModel = mongoose.models.User || model('User', userSchema);
export default UserModel;
import mongoose from "mongoose"

/**
 * User Model DB Schema
 */
export const User = mongoose.model('User',new mongoose.Schema({
    name: String,
    password: String,
    email:String
}))
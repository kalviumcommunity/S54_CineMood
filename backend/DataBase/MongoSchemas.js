const mongoose = require('mongoose')

const userDetailsSchema = new mongoose.Schema(
    {
        Name:String,
        email:String,
        password:String,
        confirmPassword:String,
        list:Array
    }
)

const Users = mongoose.model("Users",userDetailsSchema);

module.exports = Users
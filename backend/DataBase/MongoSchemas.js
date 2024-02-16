const mongoose = require('mongoose')
// const Joi = require('joi')

// const userDetailsSchema = new Joi.object({
//     Name: Joi.string().required(),
//     email: Joi.string().required()
// })

const userDetailsSchema = new mongoose.Schema(
    {
        Name:String,
        email:{type:String, unique:true},
        password:String, 
        confirmPassword:String,
        list:Array
    }
)

const Users = mongoose.model("Users",userDetailsSchema);

module.exports = Users
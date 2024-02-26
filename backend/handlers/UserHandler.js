const Users = require("../DataBase/MongoSchemas")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcryptjs")

const createHandler = async (req,res)=>{

    const {Name,email,password,confirmPassword} = req.body

    const encryptedPassword = await bcrypt.hash(password, 10)

    try{

        const oldUser = await Users.findOne({email})
        if(oldUser){
            return res.json({error:"User already exists"})
        }
        await Users.create({
            Name,
            email,
            password: encryptedPassword,
            confirmPassword: encryptedPassword,
            list:[]
        })

        res.status(201).json({ message: 'User created successfully'})

    }catch (err){
        res.status(400).send({message:"User already exists"})
    }

}
const readHandler = (req,res)=>{

    res.status(200).json({message: 'User fetched successfully'})
}
const updateHandler = (req,res)=>{
    // res.send(re1.body)
    res.status(200).json({ message: 'User updated successfully' })
}
const deleteHandler = (req,res)=>{
    // res.send(re1.body)
    res.status(200).json({ message: 'User deleted successfully' })
}

module.exports = {createHandler,readHandler,updateHandler,deleteHandler}
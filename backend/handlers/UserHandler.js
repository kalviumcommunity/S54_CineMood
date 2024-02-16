const mongoose = require('mongoose')

const Users = require("../DataBase/MongoSchemas")

const createHandler = async (req,res)=>{

    const {Name,email,password,confirmPassword} = req.body

    try{
        await Users.create({
            Name,
            email,
            password,
            confirmPassword,
            list:[]
        })
        res.status(201).json({ message: 'User created successfully' })

    }catch (err){
        res.status(400).send({message:"User already exists"})
    }

}
const readHandler = (re1,res)=>{

    res.status(200).json({message: 'User fetched successfully'})
}
const updateHandler = (re1,res)=>{
    // res.send(re1.body)
    res.status(200).json({ message: 'User updated successfully' })
}
const deleteHandler = (re1,res)=>{
    // res.send(re1.body)
    res.status(200).json({ message: 'User deleted successfully' })
}

module.exports = {createHandler,readHandler,updateHandler,deleteHandler}
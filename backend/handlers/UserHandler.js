const createHandler = (req,res)=>{
    // res.send(req.body)
    res.status(201).json({ message: 'User created successfully' })
}
const readHandler = (re1,res)=>{
    // res.send(rew.body)
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
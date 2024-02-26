const jwt = require("jsonwebtoken");
require("dotenv").config();
const Users = require("../DataBase/MongoSchemas");
const { error } = require("./MovieValidation");

const UserDataHandler = ((req, res) => {
    const { token } = req.body
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        const userEmail = user.email
        Users.findOne({ email: userEmail })
            .then((data) => {
                res.send({ status: "ok", "data": data })
            }).catch((error) => {
                res.send({ error: "error", data: error })
            })
    } catch { (err => console.log(err)) }
})

module.exports = { UserDataHandler }
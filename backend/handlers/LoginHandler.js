const Users = require("../DataBase/MongoSchemas");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginHandler = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email });

        if (!user) {
            return res.json({ status: "error", message: "User not Found" });
        }

        if (await bcrypt.compare(password, user.password)) {
            const payload = { userId: user._id, email }
            const token = jwt.sign(payload, process.env.JWT_SECRET);

            res.status(201).json({ message: 'Login successful', username: user.Name, token });
        } else {
            res.json({ status: "error", message: "Invalid Password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", error: "Internal Server Error" });
    }
};


module.exports = { loginHandler };

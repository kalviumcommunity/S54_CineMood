const express = require("express")
const router = express.Router()
const {loginHandler, logoutHandler} = require("../handlers/LoginHandler")

router.post('/', loginHandler)


module.exports = router;
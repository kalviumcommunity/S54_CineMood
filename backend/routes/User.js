const express = require("express")
const router = express.Router()

const {createHandler,readHandler,updateHandler,deleteHandler} = require("../handlers/UserHandler")
router.post('/user', createHandler);
router.get('/user/:id', readHandler);
router.put('/user/:id', updateHandler);
router.delete('/user/:id', deleteHandler);

module.exports = router;
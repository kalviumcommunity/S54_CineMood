const express = require("express")
const router = express.Router()

const {createHandler,readHandler,updateHandler,deleteHandler} = require("../handlers/UserHandler")
router.post('/', createHandler);
router.get('/:id', readHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteHandler);

module.exports = router;
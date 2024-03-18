const express = require("express");
const router = express.Router();
const userDB = require("../models/usersSchema");
const {getFunction,postFunction,putFunction} = require("../controllers/userController");

router.get("/get", getFunction);
router.post("/post", postFunction);
router.put("/edit:id", putFunction);

module.exports = router;

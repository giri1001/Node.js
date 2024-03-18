const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        require: true,
    },
    age : {
        type : Number,
    },
})

const userDB = mongoose.model("Gokul",userSchema);


module.exports = userDB;
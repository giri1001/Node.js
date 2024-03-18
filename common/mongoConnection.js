const mongoose = require('mongoose');



const connectMongo  = ()=>{
    mongoose.connect(process.env.Mongo_Url).then(()=>{
        console.log("MongoDB is Connected Successfully...🚀")
    }).catch((err)=>{
        console.log("Connection Error : ",err)
    })
}


module.exports = connectMongo;
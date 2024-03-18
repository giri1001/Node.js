const userDB = require("../models/usersSchema");


const getFunction = async (req, res) => {
    try {
      const data = await userDB.find();
      res.json({
        data: data,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }

const postFunction = async (req,res)=>{
  try{
    const {username , age} = req.body;
    const postedData = new userDB({username,age});
    await postedData.save();
    res.json({
      postedData : postedData
    })
  }catch(err){
    res.status(500).json({
      message : err.message,
    })
  }
}

const putFunction = async (req,res)=>{
  try{
    const {username,age} = req.body;
    const objID = req.params.id;
    const updatedData = await userDB.findByIdAndUpdate(
      objID,
      {username,age},
      {new:true}
      )
    res.json({
      updatedData : updatedData
    })
  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

module.exports = {getFunction, postFunction, putFunction};
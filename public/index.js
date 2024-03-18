const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
.connect("mongodb+srv://krishna43835:8DUBpl74kBIyidDY@cluster0.0lubpbi.mongodb.net/UserDB")
.then(() => {
  console.log("MongoDB connected successfully🚀.......✅");
})
.catch((err) => {
  console.log("Connection Error ❌:", err.message);
});



const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },

});

const userDB = mongoose.model("users", userSchema);


app.post("/post", async (req, res) => {
  try {
    const { userName } = req.body;

    const newData = new userDB({
      userName,
    });

    const data = await newData.save();
    res.json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/get", async (req, res) => {
  try {
    const getData = await userDB.find().sort({ _id: -1 });
    res.json({
      data: getData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.put("/edit/:id", async (req, res) => {
  try {
    const { userName } = req.body;
    const objectId = req.params.id;
    const updatedData = await userDB.findByIdAndUpdate(
      objectId,
      { userName },
      { new: true }
    );

    res.json({
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const deleteDataObjectId = req.params.id;
    const deletedData = await userDB.findByIdAndDelete(deleteDataObjectId);

    res.json({
      data: deletedData,
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

const PORT = process.env.PORT|| 7000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} ....🚀`);
});

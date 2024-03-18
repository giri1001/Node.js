// import connectMongo from "./common/mongoConnection";
const Express = require("express");
const connectMongo = require("./common/mongoConnection");
const userDB = require("./models/usersSchema");
const router = require('./routes/userRoute');
require('dotenv').config();

const App = Express();
const PORT = 7000;

App.use(Express.json());
connectMongo();
App.use(router);


App.listen(PORT, () => {
  console.log("Listening The Port : ", PORT);
});

const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cokkie = require("cookie-parser");
const route = require('./routes/routes');

const app = express();
app.use(cokkie());
app.use(bodyParser.json({ limit: "1024mb" }));
app.use("/api",route);
app.use(bodyParser.urlencoded({ limit: "1024mb", extended: true }));
dotenv.config();
require('./database/connectDatabase');


app.listen(process.env.PORT,()=>{
    console.log("⚡[Server] Server Start At Port " + process.env.PORT);
})
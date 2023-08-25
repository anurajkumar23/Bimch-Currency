// const express = require('express');
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const cokkie = require("cookie-parser");
// const route = require('./routes/routes');

// const app = express();


// const allowedOrigins = [
//   "https://bimch.vercel.app/",
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// };

// app.use(cors(corsOptions));

// app.use(cokkie());
// app.use(bodyParser.json({ limit: "1024mb" }));
// app.use("/api",route);
// app.use(bodyParser.urlencoded({ limit: "1024mb", extended: true }));
// dotenv.config();
// require('./database/connectDatabase');


// app.listen(process.env.PORT,()=>{
//     console.log("⚡[Server] Server Start At Port " + process.env.PORT);
// })



const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser"); // Corrected the spelling here
const route = require("./routes/routes");

const app = express();

const allowedOrigins = ["https://bimch.vercel.app/"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser()); // Corrected the spelling here
app.use(bodyParser.json({ limit: "1024mb" }));
app.use("/api", route);
app.use(bodyParser.urlencoded({ limit: "1024mb", extended: true }));
dotenv.config();
require("./database/connectDatabase");

app.listen(process.env.PORT, () => {
  console.log("⚡[Server] Server Start At Port " + process.env.PORT);
});

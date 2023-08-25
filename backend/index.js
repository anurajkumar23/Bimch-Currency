const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const route = require("./routes/routes");

const app = express();

const allowedOrigins = ["https://bimch.vercel.app"]; // Adjust the allowed origins

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

app.use(cookieParser());
app.use(bodyParser.json({ limit: "1024mb" }));
app.use(bodyParser.urlencoded({ limit: "1024mb", extended: true }));

// Use the cors middleware with your configured options
app.use(cors(corsOptions));

app.use("/api", route);

dotenv.config();
require("./database/connectDatabase");

app.listen(process.env.PORT, () => {
  console.log("⚡[Server] Server Start At Port " + process.env.PORT);
});

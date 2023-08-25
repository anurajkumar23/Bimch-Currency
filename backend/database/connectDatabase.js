const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("🫙 [Data Base] Data Base Connected ");
  })
  .catch((error) => {
    console.log(error);
  });

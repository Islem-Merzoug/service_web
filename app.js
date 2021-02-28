const express = require("express")
const app = express();
const connection = require("./models/database");
const lieuxRoute = require("./routes/lieux-routes");

/* Routes */
app.use("/api/lieux", lieuxRoute);


try {
//    connection.connect();
    app.listen(5000);
  } catch (err) {
    console.log(err);
  }
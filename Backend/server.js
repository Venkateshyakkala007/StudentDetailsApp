require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mongoString = process.env.DATABASE_URL;

//  mongoDb connection
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database is connected");
});

const app = express();

app.use(express.json());

app.use(cors());

// adding routes
const routes = require("./routes/routes");
app.use("/api", routes);

//starting the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

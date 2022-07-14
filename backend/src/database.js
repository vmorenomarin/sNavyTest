require("dotenv").config();
const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) =>
    console.log(`Database ${db.connection.name} is connected in server.`)
  )
  .catch((error) => console.log(error));

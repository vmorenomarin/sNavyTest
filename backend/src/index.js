require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");



require("./database");
const { PORT } = process.env;

// Instantiate an Express Application
const app = express();
app.set("PORT", PORT);

// Middlewares

/**  Parse incoming requests with urlencoded payloads */
app.use(express.urlencoded({ extended: true }));

/**  Parse incoming requests with JSON payloads */
app.use(express.json());

/** Cross-Origin Resource Sharing. Enable share resources between two domains/servers. */
app.use(cors({ origin: "*" }));

/**  HTTP request logger */
app.use(morgan("dev"));

/** Use routes to controller methods */
app.use("/starships", require("./routes/starship.route"));

// Start server

app.listen(app.get("PORT"), () => {
  console.log(`Server running in ${app.get("PORT")} port.`);
});

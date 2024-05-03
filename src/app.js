// app.js
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const db = require("./db/index");

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true,
	})
);

// const {updateData} = require("./routes/updateData.routes");
const  router = require("./routes/updateData.routes");
app.use("/api/v1/data", router);

module.exports = app;

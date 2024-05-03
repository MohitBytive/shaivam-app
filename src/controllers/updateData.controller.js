// updateData.controller.js
const { asyncHandler } = require("../utils/asyncHandler");
const { db, connectDB } = require("../db/index");
const axios = require("axios");
const { insertDataIntoTables } = require("../services/updateData.service");

exports.updateSqlite = asyncHandler(async (req, res) => {
	console.log("this is req.body", req.body);
	console.log("Controller triggered");
	insertDataIntoTables();
	res.send("Controller for updateSqlite");
});

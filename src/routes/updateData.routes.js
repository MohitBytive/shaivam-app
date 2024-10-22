const { updateSqlite } = require("../controllers/updateData.controller");
const express = require("express");
const router = express.Router();
const { setDBName } = require("../utils/dbName");
const { connectDB } = require("../db/index");
const createTables = require("../models/thirumuraiTables.model");
const { getStrotrasStrapi } = require("../utils/strotraService");
const { main } = require("../services/veda/veda.service");

router.route("/dump").post((req, res) => {
	console.log("iin add data ");
	console.log(req.body.model);
	// if (req.body.model == "app-dump-update") {
	console.log("request hitted!!!");
	// setDBName(
	// 	req?.body?.entry?.DumpName.split(" ").join("") + "_" + req?.body?.entry?.Version ||
	// 		"thirumuraiSong_12"
	// );

	setDBName("thirumuraiSong_59");
	connectDB()
		.then((db) => {
			return createTables(db);
		})
		.then((tablesCreated) => {
			if (tablesCreated) {
				updateSqlite(req, res);
				console.log("app dump update triggered");
			} else {
				console.log("Failed to create tables. Server not started.");
			}
		})
		.catch((err) => {
			console.log("Error:", err);
		});
	// }
});

router.route("/get").get(async (req, res) => {
	// await main();

	const data = await main();
	res.send(data);
});

module.exports = router;

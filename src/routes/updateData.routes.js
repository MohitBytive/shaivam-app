const { updateSqlite } = require("../controllers/updateData.controller");
const express = require("express");
const router = express.Router();
const { setDBName } = require("../utils/dbName");
const { connectDB } = require("../db/index");
const createTables = require("../models/thirumuraiTables.model");
const { getStrotrasStrapi } = require("../utils/strotraService");
const insertStrotras = require("../services/insertDataStrotras");
const strotrasInsertionSql = require("../utils/strotrasData");
const { playlistInsertion } = require("../services/playlistInsertion");
router.route("/addata").post((req, res) => {
	console.log("iin add data ");
	console.log(req.body.model);
	// if (req.body.model == "app-dump-update") {
	console.log("request hitted!!!");
	// setDBName(
	// 	req?.body?.entry?.DumpName.split(" ").join("") + "_" + req?.body?.entry?.Version ||
	// 		"thirumuraiSong_12"
	// );

	setDBName("thirumuraiSong_41");
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
	const data = await playlistInsertion();
});

module.exports = router;

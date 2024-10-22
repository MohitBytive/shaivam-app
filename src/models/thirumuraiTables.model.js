// models/thirumuraiTables.model.js
const sqlite3 = require("sqlite3").verbose();
// const {db}= require('../db/index')
const createThirumuraiTable = require("./thirumurai.model");
const createSongsTable = require("./thirumuraiSongs.model");
const createOdhuvarsTableSQL = require("./odhuvars.model");
const createStrotrasTableSQL = require("./strotras.model");
const createCategoryTableSQL = require("./category.model");
const {
	createAudioAlbumTable,
	createAudioPlaylistTable,
	createShaivaSiddhantaTable,
	createShaivaSiddhantaBooksTable,
} = require("../models/shaivaSiddhanta.model");

const {
	createVedasTable,
	createVedaShakaTable,
	createVedaSuktamTable,
	createVedaMantraTable,
	createVedaChanterTable,
} = require("../models/veda.model");
const createSpecialPlaylistTableSQL = require("./specailplaylists.model");

const createTables = async (db) => {
	try {
		// const db = await connectDB(); // Wait for the database connection
		console.log("Function triggered");
		db.run(createVedasTable);
		db.run(createVedaShakaTable);
		console.log(" createVedaShakaTable  table created shaka table");
		db.run(createVedaSuktamTable);
		db.run(createVedaMantraTable);
		db.run(createVedaChanterTable);

		db.run(createAudioAlbumTable);
		console.log(" createAudioAlbumTable  table created successfully");

		db.run(createAudioPlaylistTable);
		console.log("AudioPlaylist table created successfully");

		db.run(createShaivaSiddhantaTable);
		console.log("ShaivaSiddhanta table created successfully");

		db.run(createShaivaSiddhantaBooksTable);
		console.log("ShaivaSiddhantaBooks table created successfully");
		db.run(createSpecialPlaylistTableSQL);

		console.log("SpecialPlaylist table created successfully.");

		db.run(createCategoryTableSQL);
		console.log("category table created successfully.");

		db.run(createThirumuraiTable);
		console.log("thirumurais table created successfully.");

		db.run(createSongsTable);
		console.log("thirumurai_songs table created successfully.");

		db.run(createOdhuvarsTableSQL);
		console.log("odhuvars table created successfully.");

		db.run(createStrotrasTableSQL);
		console.log("Strotras table created successfully.");

		return true;
	} catch (error) {
		console.error("Error creating tables:", error.message);
	}
};

module.exports = createTables;

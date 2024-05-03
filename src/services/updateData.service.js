const { connectDB } = require("../db/index");
const createTables = require("../models/thirumuraiTables.model");
const fs = require("fs");
const { createComposite } = require("../services/compositeKeys");
const updateAuthors = require("../services/updateThirumurai");

const { uploadFile } = require("../utils/uploadS3");
const archiver = require("archiver");
const { getDBName } = require("../utils/dbName");
const { updateTrimuria, latestDumpData } = require("../services/saveFileStrapi");
const { getThirumuraiCategory } = require("../utils/api.service");
const {
	insertCategory,
	insertThirumurais,
	insertThirumuraiSongs,
	insertOdhuvars,
	runInsertion,
} = require("./insertion.service");
const strotrasInsertion = require("../services/strotras.service");

let idData;
const insertDataIntoTables = async () => {
	try {
		console.log("in insertDat Into tables");
		await connectDB();
		console.log("after connected To DB");

		strotrasInsertion();
		// insertAuthorData();
		// console.log('insertion of strotras and author data is completed !!');
		for (let i = 45; i < 59; i++) {
			//45-----59

			const data = await getThirumuraiCategory(i.toString());
			console.log(i);
			await insertCategory(data);
			await insertThirumurais(
				data.attributes.thirumurais.data,
				data.attributes.thirumurai_songs.data
			);
			await insertOdhuvars(data.attributes.odhuvars.data, data.attributes.name);
		}
		updateAuthors();

		createComposite();

		const output = fs.createWriteStream(`D:\\bytiveWorkSpace\\shaivam-app\\${getDBName()}.zip`);
		const archive = archiver("zip", {
			zlib: { level: 9 }, // Compression level.
		});

		output.on("close", () => {
			uploadFile();
		});

		archive.on("error", (err) => {
			throw err;
		});

		archive.pipe(output);

		archive.file(`D:\\bytiveWorkSpace\\shaivam-app\\${getDBName()}.db`, {
			name: `${getDBName()}.db`,
		});

		archive.finalize();
	} catch (error) {
		console.error("Error inserting data:", error.message);
	} finally {
		console.log("finally");
	}
};

module.exports = { insertDataIntoTables };

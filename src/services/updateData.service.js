const { connectDB } = require("../db/index");

const fs = require("fs");
const { createComposite } = require("../services/compositeKeys");
const { uploadFile } = require("../utils/uploadS3");
const archiver = require("archiver");
const { getDBName } = require("../utils/dbName");
const { getThirumuraiCategory } = require("../utils/api.service");
const { insertCategory, insertThirumurais, insertOdhuvars } = require("./insertion.service");
const { runTasks } = require("./runTasks");
const { main } = require("./shaivaSiddhantaModules");

const { veda_main } = require("./veda/VedaMain");
let idData;
const insertDataIntoTables = async () => {
	try {
		console.log("in insertDat Into tables");
		await connectDB();
		console.log("after connected To DB");
		await runTasks();
		await main();

		for (let i = 29; i < 43; i++) {
			//29-----42
			const data = await getThirumuraiCategory(i.toString());
			console.log(i);
			await insertCategory(data);
			await insertThirumurais(
				data.attributes.thirumurais.data,
				data.attributes.thirumurai_songs.data,
				i
			);
			await insertOdhuvars(data.attributes.odhuvars.data, data.attributes.prevId);
		}

		createComposite();
		await veda_main();
		const output = fs.createWriteStream(`E:\\bytiveWorkSpace\\shaivam-app\\${getDBName()}.zip`);
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
	}
};

module.exports = { insertDataIntoTables };

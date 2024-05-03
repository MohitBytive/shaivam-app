const sqlite3 = require("sqlite3").verbose();
let db;
const { getDBName } = require("../utils/dbName");
const connectDB = () => {
	return new Promise((resolve, reject) => {
		try {
			const tempDB = new sqlite3.Database(`${getDBName()}.db`, (err) => {
				if (err) {
					console.error("Error opening database:", err.message);
					reject(err);
				} else {
					console.log("Connected to the SQLite database.");
					db = tempDB;
					resolve(db);
				}
			});
		} catch (error) {
			console.error("SQLite connection FAILED", error);
			reject(error);
		}
	});
};

module.exports = {
	connectDB,
	db: () => db,
};

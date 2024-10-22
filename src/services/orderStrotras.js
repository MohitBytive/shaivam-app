const { db } = require("../db/index");
const { LOCALES } = require("../constants/constants");

// Connect to the SQLite database

// Loop through all locales

const runInsertion = (selectDataSQL, dataFilter) => {
	return new Promise((resolve, reject) => {
		db().all(selectDataSQL, dataFilter, (err, rows) => {
			if (err) {
				reject(err);
			} else {
				resolve(rows);
			}
		});
	});
};

const sequenceStrotras = async () => {
	for (let code of LOCALES) {
		console.log("🚀 ~ sequenceStrotras ~ code:", code);
		let selectSql = `SELECT * FROM strotras WHERE locale = ? ORDER BY title ASC`;
		console.log("🚀 ~ sequenceStrotras ~ selectSql:", selectSql);
		const rows = await runInsertion(selectSql, [code]);

		// Update each record with the sequence number
		let sequence = 1;
		rows.forEach((row) => {
			// Update SQL query to set the sequence number
			let updateSql = `UPDATE strotras SET sequence = ? WHERE id = ?`;
			runInsertion(updateSql, [sequence, row.id]);
			sequence++;
		});

		console.log(`Updated sequence for locale: (${code})`);
		// });
	}
	return null;
};

module.exports = { sequenceStrotras };

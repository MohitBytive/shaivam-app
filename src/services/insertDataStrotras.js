const { db } = require("../db/index");

const runInsertion = (insertDataSQL, dataToInsert) => {
	return new Promise((resolve, reject) => {
		db().run(insertDataSQL, dataToInsert, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
};

const insertStrotras = async (strotras, locale) => {
	const s = strotras.attributes;
	const insertData = [
		s.Scripture_title,
		s.Scripture_url,
		s.scripture_order,
		locale,
		s.scripture_content,
		s.audio_url,
		s.description,
	];
	const insertQuery = `INSERT INTO strotras (title,strotras_url,strotras_order,locale,strotras_content,audio_url,description) VALUES(?,?,?,?,?,?,?);   `;

	await runInsertion(insertQuery, insertData);
};

module.exports = insertStrotras;

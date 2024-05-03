const insertStrotras = require("../services/insertDataStrotras");
const strotrasInsertionSql = async (strotras) => {
	for (let s of strotras) {
		const res = insertStrotras(s);
	}
};

module.exports = strotrasInsertionSql;

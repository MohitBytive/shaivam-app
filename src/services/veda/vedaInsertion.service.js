const { db } = require("../../db/index");
const { veda_suktams } = require("./VedaSuktams");
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

const insertVeda = async (data, i) => {
	const vedaData = [data?.attributes?.name, data?.attributes?.veda_Id];
	const query = "INSERT INTO vedas (title, vedaId) VALUES (?, ?);";
	await runInsertion(query, vedaData);
	await insertVedaShaka(data?.attributes?.veda_shakas?.data, i, data?.attributes?.name);
};

const insertVedaShaka = async (data, i, VedaName) => {
	let shaka_id = [];
	for (let d of data) {
		shaka_id.push(d.id);
		const vedaShakaData = [d?.attributes?.shaka_name,d.id ,i, d?.sub_veda ?? VedaName];
		const query = "INSERT INTO veda_shakas (shakaTitle ,shakaId, vedaId, subVeda) VALUES (? ,?, ?, ?)";

		await runInsertion(query, vedaShakaData);
	}
	await veda_suktams(shaka_id, i, VedaName);
};
module.exports = { insertVeda };

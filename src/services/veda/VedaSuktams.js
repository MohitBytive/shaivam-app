const { VedaShakaService } = require("./veda.service");
const { insertSuktams } = require("./vedaSuktamInsertion.service");

const veda_suktams = async (ids, VedaId, VedaName) => {
	console.log("🚀 ~ constveda_suktams= ~ ids:", ids);
	const url = "/api/veda-shakas";
	for (let id of ids) {
		const data = await VedaShakaService(url, id);
		// console.log("🚀 ~ constveda_suktams= ~ data:", data.data.attributes.veda_suktams.data);
		await insertSuktams(data.data.attributes.veda_suktams.data, VedaId, VedaName, id);

	}
};
module.exports = { veda_suktams };

const { VedaService, VedaShakaService } = require("./veda.service");
const { insertVeda } = require("./vedaInsertion.service");

const veda_main = async () => {
	const url = "/api/vedas";
	for (let i = 1; i <= 5; i++) {
		const data = await VedaService(url, i);
		// console.log("🚀 ~ constveda_main= ~ data:", data.data[0].attributes.veda_shakas.data);
		// return;
		await insertVeda(data.data[0], i);
	}
};

module.exports = { veda_main };

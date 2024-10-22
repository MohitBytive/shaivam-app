const { default: axios } = require("axios");
const { BASE_URL } = require("../../constants/constants");
const VedaService = async (url, id) => {
	try {
		const data = await axios.get(
			`${BASE_URL}${url}?filters[veda_Id][$eq]=${id}&populate=veda_shakas`
		);
		console.log(`${BASE_URL}/${url}`);
		return data.data;
	} catch (error) {
		console.log("🚀 ~ main ~ error:", error.message);
	}
};

const VedaShakaService = async (url, id) => {
	try {
		try {
			console.log(`${BASE_URL}${url}/${id}?populate=veda_suktams`);
			const data = await axios.get(
				`${BASE_URL}${url}/${id}?populate=veda_suktams.veda_mantras,veda_suktams.vedic_chanters`
			);
			return data.data;
		} catch (error) {
			console.log("🚀 ~ main ~ error:", error.message);
		}
	} catch (error) {}
};

module.exports = { VedaService, VedaShakaService };

const axios = require("axios");
const { BASE_URL } = require("../constants/constants");
const getThirumuraiCategory = async (id) => {
	try {
		const res = await axios.get(
			`${BASE_URL}/api/trimurai-categories/${id}?populate=thirumurais&populate=thirumurai_songs&populate=odhuvars`
		);
		console.log(
			`${BASE_URL}/api/trimurai-categories/${id}?populate=thirumurais&populate=thirumurai_songs&populate=odhuvars`
		);
		const data = await res?.data?.data;
		return data;
	} catch (err) {
		console.error("Error fetching thirumurai category:", err.message);
		throw err;
	}
};

module.exports = { getThirumuraiCategory };

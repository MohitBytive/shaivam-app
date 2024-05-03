const axios = require("axios");

const getThirumuraiCategory = async (id) => {
	try {
		const baseURL = `https://qa-admin.shaivam.in/api/trimurai-categories`;
		const res = await axios.get(
			`${baseURL}/${id}?populate=thirumurais&populate=thirumurai_songs&populate=odhuvars`
		);
		console.log(
			`${baseURL}/${id}?populate=thirumurais&populate=thirumurai_songs&populate=odhuvars`
		);
		const data = await res?.data?.data;
		return data;
	} catch (err) {
		console.error("Error fetching thirumurai category:", err.message);
		throw err;
	}
};

module.exports = { getThirumuraiCategory };

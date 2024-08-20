const { BASE_URL } = require("../constants/constants");
const axios = require("axios");
const getPlaylist = async () => {
	try {
		const res = await axios.get(
			`${BASE_URL}/api/special-playlists?populate=thirumurais&populate=scriptures`
		);
		console.log(`${BASE_URL}/api/special-playlists?populate=thirumurais&populate=scriptures`);

		const data = await res?.data?.data;
		return data;
	} catch (err) {
		console.error("Error fetching thirumurai category:", err.message);
	}
};

module.exports = { getPlaylist };

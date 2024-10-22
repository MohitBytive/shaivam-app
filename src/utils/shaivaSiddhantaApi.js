const { default: axios } = require("axios");
const { BASE_URL } = require("../constants/constants");

const getBooks = async (id) => {
	try {
		const end_point = `/api/shaiva-siddhanta-categories?filters[ShaivaSiddhantaId][$eq]=${id}&populate=*`;
		const response = await axios.get(`${BASE_URL}${end_point}`);

		return response.data;
	} catch (error) {
		if (error.response) {
			console.log(
				`Error updating Strapi data: ${error.response.status} ${error.response.statusText}`
			);
			console.log(error.response.data);
		} else {
			console.log(`Error updating Strapi data: ${error.message}`);
		}
	}
};

const getAlbum = async (id) => {
	try {
		const end_point = `/api/audio-gallery-sub-categories/${id}?populate=audio_song_lists`;
		const response = await axios.get(`${BASE_URL}${end_point}`);

		return response.data.data;
	} catch (error) {
		if (error.response) {
			console.log(
				`Error updating Strapi data: ${error.response.status} ${error.response.statusText}`
			);
			console.log(error.response.data);
		} else {
			console.log(`Error updating Strapi data: ${error.message}`);
		}
	}
};

const getLocalizedShaiva = async (id) => {
	try {
		const end_point = `/api/shaiva-siddhanta-categories/${id}?populate=*`;
		const response = await axios.get(`${BASE_URL}${end_point}`);

		return response.data.data;
	} catch (error) {
		if (error.response) {
			console.log(
				`Error updating Strapi data: ${error.response.status} ${error.response.statusText}`
			);
			console.log(error.response.data);
		} else {
			console.log(`Error updating Strapi data: ${error.message}`);
		}
	}
};

module.exports = { getBooks, getAlbum, getLocalizedShaiva };

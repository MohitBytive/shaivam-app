const { getBooks, getLocalizedShaiva } = require("../utils/shaivaSiddhantaApi");

const shaivaModule = async (id) => {
	try {
		const data = await getBooks(id);

		return data;
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

const getShaiva = async (id) => {
	try {
		const data = await getLocalizedShaiva(id);

		return data;
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

module.exports = { shaivaModule, getShaiva };

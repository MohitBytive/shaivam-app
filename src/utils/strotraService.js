const axios = require("axios");

const getStrotrasStrapi = async (page) => {
	try {
		const uri = `https://qa-admin.shaivam.in/api/scriptures?pagination[pageSize]=25&pagination[page]=${page}`;
		const res = axios.get(`${uri}`);
		const data = await res;
		return data;
	} catch (error) {
		console.log(error);
	}
};

module.exports =  getStrotrasStrapi ;

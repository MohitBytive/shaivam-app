const { shaivaModule, getShaiva } = require("./shaivaSiddhanta");

const {
	insertShaivaSiddhantaBooks,
	insertShaivaSiddhantas,
	insertAudioAlbum,
} = require("./insertionShaiva");

const localeInsertions = async (d) => {
	console.log("🚀 ~ main ~ i:", d);
	const data = await getShaiva(d[0].id);
	console.log("🚀 ~ localeInsertions ~ data:", data);
	// return;
	await insertShaivaSiddhantaBooks(data.attributes);
	await insertShaivaSiddhantas(data.attributes?.shaiva_siddhantas, data.id);
	// handling locale data
	return;
};
const main = async () => {
	for (let i = 1; i <= 18; i++) {
		const data = await shaivaModule(i);
		await insertShaivaSiddhantaBooks(data.data[0].attributes);
		await insertShaivaSiddhantas(data.data[0].attributes?.shaiva_siddhantas, i);
		await insertAudioAlbum(data.data[0].attributes?.audio_gallery_albums?.data);
		// handling locale data
		if (!data.data[0].attributes?.localizations?.data.length) return;
		await localeInsertions(data.data[0].attributes?.localizations?.data);

		// return;
		// console.log(JSON.stringify(data.data[0].attributes.audio_gallery_albums));
	}
};

module.exports = { main };

const { getPlaylist } = require("../utils/playlist.service");
const { insertData } = require("../services/insertion.service");
const playlistInsertion = async () => {
	console.log("jeejeejejejeejejejejejejejej");

	const data = await getPlaylist();

	for (let d of data) {
		const title = d.attributes.PlaylistName;
		if (d.attributes.thirumurais.data.length) {
			const arr = d.attributes.thirumurais.data;

			for (let a of arr) {
				const play = {
					title: title,
					fkTrimuria: a.attributes.fkTrimuria,
					prevId: a.attributes.thrimurai_order,
					strotraTitle: "",
				};

				const update = await insertData(play);
			}
		}

		if (d.attributes.scriptures.data.length) {
			const arr = d.attributes.scriptures.data;

			for (let a of arr) {
				const play = {
					title: title,
					fkTrimuria: "",
					prevId: "",
					strotraTitle: a.attributes.Scripture_title,
				};
				const update = await insertData(play);
			}
		}
	}
	return true;
};

module.exports = { playlistInsertion };

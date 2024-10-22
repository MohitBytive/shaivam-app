const { db } = require("../db/index");
const { getAlbum } = require("../utils/shaivaSiddhantaApi");

const runInsertion = (insertDataSQL, dataToInsert) => {
	return new Promise((resolve, reject) => {
		db().run(insertDataSQL, dataToInsert, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
};

const extractSongId = async (data) => {
	const json = [];
	if (!data[0]?.id) return [];
	data.forEach((element) => {
		json.push({ album_id: element.id });
	});
	return json;
};

const insertShaivaSiddhantaBooks = async (data) => {
	const SongIds = await extractSongId(data.audio_gallery_albums?.data);
	console.log("🚀 ~ insertShaivaSiddhantaBooks ~ SongIds:", SongIds);
	const insertData = [
		data.Name,
		data.author,
		data.ShaivaSiddhantaId,
		JSON.stringify(SongIds),
		data.TextType,
		data.locale,
	];
	// console.log("🚀 ~ insertShaivaSiddhantaBooks ~ insertData:", insertData);
	// return;
	const insertShaivaSiddhantaBooksQuery = `
    INSERT INTO shaiva_siddhanta_books 
    (title, author, shiava_siddhanta_id,album_id,text_type , locale) 
    VALUES(?, ?, ?, ?,?, ?);	
`;

	await runInsertion(insertShaivaSiddhantaBooksQuery, insertData);
};

const insertShaivaSiddhantas = async (data, catId) => {
	data = data.data;
	for (let d of data) {
		d = d.attributes;
		const insertData = [
			d.ss_songID,
			d.TitleType,
			d.text,
			d.PadalNo,
			d.EnglishTranslation,
			d.TamilSplit,
			d.TamilExplanation,
			d.TitleName,
			catId,
			d.locale,
		];
		const insertShaivaSiddhantaQuery = `
        INSERT INTO shaiva_siddhanta 
        (ss_song_id, title_type, description, song_no, english_translation,tamil_split, tamil_explanation, title_name, shiava_siddhanta_id, locale) 
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?,?);
    `;
		await runInsertion(insertShaivaSiddhantaQuery, insertData);
	}
	return;
};

const insertAudioAlbum = async (data) => {
	if (!data.length) return;
	for (let d of data) {
		console.log("🚀 ~ insertAudioAlbum  ~ d:", d);
		const insertData = [d.attributes.name, d.id, d.attributes.Artist];

		const insertAudioAlbumQuery = `
		INSERT INTO audio_album
		(title, album_id, artist)
		VALUES(?, ?, ?)`;
		await runInsertion(insertAudioAlbumQuery, insertData);
		const alData = await getAlbum(d.id);

		await insertAudioList(d.id, alData.attributes);
	}
};

const insertAudioList = async (id, data) => {
	const album = data.audio_song_lists.data;
	for (let al of album) {
		al = al.attributes;
		const insertData = [al.title, id, al.order, al.rawURL];

		const insertAudioPlaylistQuery = `
            INSERT INTO audio_playlists 
            (title, album_id, "order", rawURL) 
            VALUES(?, ?, ?, ?);
        `;
		await runInsertion(insertAudioPlaylistQuery, insertData);
	}
};
module.exports = { insertShaivaSiddhantaBooks, insertShaivaSiddhantas, insertAudioAlbum };

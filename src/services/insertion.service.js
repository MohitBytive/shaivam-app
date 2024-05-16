const { db } = require("../db/index");

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

const insertCategory = async (data) => {
	const dataInsertCategory = [
		data.attributes.name,
		data.attributes.url,
		data.attributes.content,
		data.attributes.prevId,
	];

	const categoryInsertSQL = `
	  INSERT INTO category (name, url, content, prevId)
	  VALUES (?, ?, ?, ?)
	`;
	await runInsertion(categoryInsertSQL, dataInsertCategory);
};

const insertThirumurais = async (thirumuraisData, songsData) => {
	// console.log('thiruraiData', JSON.stringify(thirumuraisData));

	for (const t of thirumuraisData) {
		const dataThirumuraiInsert = [
			t.attributes.Thirumurai_title,
			t.attributes.Thirumurai_url,
			t.attributes.fkTrimuria,
			t.attributes.prevId,
			t.attributes.search_thirumurai_title,
			t.attributes.titleNo,
			t.attributes.title,
			t.attributes.pann,
			t.attributes.audioUrl,
			t.attributes.thalam,
			t.attributes.country,
			t.attributes.author,
			t.attributes.locale,
		];

		const thirumuraisInsertSQL = `INSERT INTO thirumurais (title, ThirumuraiUrl, fkTrimuria, prevId, searchTitle,titleNo,titleS,pann,audioUrl,thalam,country,author,locale)
		VALUES (?, ?, ?, ?, ? ,? ,? ,? ,? ,? ,? ,?,?)
	  `;
		await runInsertion(thirumuraisInsertSQL, dataThirumuraiInsert);
	}
	await insertThirumuraiSongs(songsData);
};
const insertThirumuraiSongs = async (thirumuraiSongsData) => {
	for (const song of thirumuraiSongsData) {
		const {
			title,
			pann,
			audioUrl,
			thalam,
			country,
			author,
			url,
			rawSong,
			songNo,
			addon,
			type,
			searchRawSong,
			locale,
			thirumuraiId,
			refId,
			tamilSplit,
			tamilExplanation,
			tamilNotes,
			englishTranslation,
			hindiTranslation,
		} = song.attributes;

		const thirumuraiSongsInsertSQL = `
		INSERT INTO thirumurai_songs (title, pann, audioUrl,
		thalam, country, author, url,addon,type, rawSong,songNo, searchTitle, 
		locale, thirumuraiId, prevId,
		tamilSplit,
		tamilExplanation,
		tamilNotes,
		englishTranslation,hindiTranslation)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?,?, ?,?,?, ?, ?,?,?,?,?,?,?)
	  `;

		await runInsertion(thirumuraiSongsInsertSQL, [
			title,
			pann,
			audioUrl,
			thalam,
			country,
			author,
			url,
			addon,
			type,
			rawSong,
			songNo,
			searchRawSong,
			locale,
			thirumuraiId,
			refId,
			tamilSplit,
			tamilExplanation,
			tamilNotes,
			englishTranslation,
			hindiTranslation,
		]);
	}
};

const insertOdhuvars = async (odhuvarsData, categoryName) => {
	for (const o of odhuvarsData) {
		const { Odhuvarname, Pathigam, Odhuvar_Tamilname, Audio_Url, thirumariasiriyar } =
			o.attributes;

		const odhuvarsInsertSQL = `
		INSERT INTO odhuvars (artist, title, thalamOdhuvarTamilname, url, thirumariasiriyar, categoryName)
		VALUES (?, ?, ?, ?, ?, ?)
	  `;

		await runInsertion(odhuvarsInsertSQL, [
			Odhuvarname,
			Pathigam,
			Odhuvar_Tamilname,
			Audio_Url,
			thirumariasiriyar,
			categoryName,
		]);
	}
};

module.exports = {
	runInsertion,
	insertCategory,
	insertThirumurais,
	insertThirumuraiSongs,
	insertOdhuvars,
};

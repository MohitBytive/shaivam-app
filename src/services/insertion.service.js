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

const insertData = async (data) => {
	const query = `insert into special_playlists (title, fkTrimuria,prevId,strotraTitle) VALUES (?,?,?,?)`;
	await runInsertion(query, Object.values(data));
};

const insertThirumurais = async (thirumuraisData, songsData, i) => {
	// console.log('thiruraiData', JSON.stringify(thirumuraisData));

	for (const t of thirumuraisData) {
		const dataThirumuraiInsert = [
			t.attributes.Thirumurai_title,
			t.attributes.Thirumurai_url,
			t.attributes.fkTrimuria,
			t.attributes.thrimurai_order,
			t.attributes.search_thirumurai_title,
			t.attributes.titleNo,
			t.attributes.title,
			t.attributes.adaddon,
			t.attributes.pann,
			t.attributes.country_sequence,
			t.attributes.audioUrl?.replace(
				"http://www.shaivam.org",
				"https://shaivamfiles.fra1.cdn.digitaloceanspaces.com"
			),
			t.attributes.thalam,
			t.attributes.country,
			t.attributes.author,
			t.attributes.locale,
			t.attributes.authorNo,
			t.attributes.orderAuthor,
		];

		const thirumuraisInsertSQL = `INSERT INTO thirumurais (title, ThirumuraiUrl, fkTrimuria, prevId, 
		searchTitle,titleNo,titleS,addon,pann,
		country_sequence,audioUrl,thalam,country,author,locale,authorNo, orderAuthor)
		VALUES (?, ?, ?, ?, ? ,? ,? ,? ,? ,?,? ,?,? ,?,?,?,?)
	  `;
		await runInsertion(thirumuraisInsertSQL, dataThirumuraiInsert);
	}
	await insertThirumuraiSongs(songsData, i);
};
const insertThirumuraiSongs = async (thirumuraiSongsData, i) => {
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
			searchRawSong,
			locale,
			type,
			addon,
			thirumuraiId,
			tamilSplit,
			tamilExplanation,
			tamilNotes,
			englishTranslation,
			hindiTranslation,
		} = song.attributes;

		const thrimurai_order = i < 39 ? song.attributes.titleNo : song.attributes.sequence;

		const thirumuraiSongsInsertSQL = `
		INSERT INTO thirumurai_songs (title, pann, audioUrl,
		thalam, country, author, url, rawSong,songNo, searchTitle, 
		locale,type,
		addon, thirumuraiId, prevId,
		tamilSplit,
		tamilExplanation,
		tamilNotes,
		englishTranslation,hindiTranslation)
		VALUES (?, ?, ?, ?, ?, ?,?,?, ?, ?,?, ?, ?, ?,?,?,?,?,?,?)
	  `;

		await runInsertion(thirumuraiSongsInsertSQL, [
			title,
			pann,
			audioUrl,
			thalam,
			country,
			author,
			url,
			rawSong,
			songNo,
			searchRawSong,
			locale,
			type,
			addon,
			thirumuraiId,
			thrimurai_order,
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
		const {
			Odhuvarname,
			Pathigam,
			Odhuvar_Tamilname,
			Pathikam_No,
			Audio_Url,
			thirumariasiriyar,
			sequence,
		} = o.attributes;

		const odhuvarsInsertSQL = `
		INSERT INTO odhuvars (artist, title, titleNo,thalamOdhuvarTamilname, url, thirumariasiriyar, sequence,categoryId)
		VALUES (?, ?, ?, ?, ?, ?,?,?)
	  `;

		await runInsertion(odhuvarsInsertSQL, [
			Odhuvarname,
			Pathigam,
			Pathikam_No,
			Odhuvar_Tamilname,
			Audio_Url,
			thirumariasiriyar,
			sequence,
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
	insertData,
};

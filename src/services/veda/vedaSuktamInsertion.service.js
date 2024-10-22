const { db } = require("../../db/index");
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
const insertSuktams = async (data, VedaId, VedaName, id) => {
	for (let a of data) {
		let suktamId = a?.id;
		let d = a?.attributes;
		const dataArray = [
			suktamId, //
			d?.suktamName, //
			id, //
			d?.divisionOneNo, //
			d?.divisionOneName, //
			d?.divisionTwoNo, //
			d?.divisionTwoName, //
			d?.divisionThreeName,
			d?.divisionThreeNo,
			d?.divisionFourName,
			d?.divisionFourNo,
			d?.chanterName,
			d?.rishi,
			d?.devata,
			d?.chandas,
			VedaId,
			d?.title,
			d?.titleNo,
			d?.sub_veda ?? VedaName,
		];
		const query = `INSERT INTO veda_suktams ( 
                        suktamId,              
                        suktamName,
                        shakaId,
                        divisionOneNo,
                        divisionOneName,
                        divisionTwoNo,
                        divisionTwoName,
                        divisionThreeName,
                        divisionThreeNo,
                        divisionFourName,
                        divisionFourNo,
                        chanterName,
                        rishi,
                        devata,
                        chandas,
                        vedaId,
                        title,
                        titleNo,
                        subVeda
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?);
                    `;

		await runInsertion(query, dataArray);

		if (d?.vedic_chanters) {
			await insertVedicChanters(d?.vedic_chanters.data, suktamId);
		}
		if (d?.veda_mantras) {
			await insertMantras(d?.veda_mantras.data, suktamId);
		}
	}
};

const insertMantras = async (data, suktamId) => {
	for (let a of data) {
		let d = a?.attributes;
		const dataArray = [
			d?.vedaId,
			suktamId,
			d?.suktamOrder,
			d?.shrunkala,
			d?.samaRdc,
			d?.divisionFiveNo,
			d?.mantra,
			d?.searchMantra,
			d?.SongName,
		];
		const query = `INSERT INTO veda_mantras (
                        vedaId,
                        suktamId,
                        songNo,
                        shrunkala,
                        samaRdc,
                        divisionFiveNo,
                        description,
                        searchMantra,
                        SongName
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?);
                    `;

		await runInsertion(query, dataArray);
	}
};
const insertVedicChanters = async (data, suktamId) => {
	for (let d of data) {
		d = d?.attributes;
		const dataArray = [d?.audioUrl, d?.chanter_name, d?.title, d?.sequence, suktamId];
		const query = `INSERT INTO veda_chanters (
                            url,
                            name,
                            title,
                            sequence,
                            suktamId
                        ) VALUES (?, ?, ?, ?, ?);
                        `;

		await runInsertion(query, dataArray);
	}
};
module.exports = { insertSuktams };

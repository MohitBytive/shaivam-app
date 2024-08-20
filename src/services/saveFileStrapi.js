const { updateStrapiData, getLatestDumpId } = require("../utils/updateStrapi");
const { getDBName } = require("../utils/dbName");
const app = require("../app");

const updateTrimuria = async () => {
	try {
		const endPoint = `https://shaivamfiles.fra1.digitaloceanspaces.com/sqlitedump/${getDBName()}.zip`;
		const data = await latestDumpData();

		const appData = JSON.stringify({
			data: {
				FilePath: endPoint,
				DumpName: data.data[0]?.attributes.DumpName,
				Version: data.data[0]?.attributes.Version,
			},
		});

		let id = data.data[0]?.id;
		console.log(appData.data);
		console.log(id);

		const url = `https://prod-admin.shaivam.in/api/app-dump-updates/${id}`;
		const res = await updateStrapiData(url, appData);
		return res;
	} catch (error) {
		console.log(error.data);
	}
};

const latestDumpData = async () => {
	const url =
		"https://prod-admin.shaivam.in/api/app-dump-updates?sort=Version:desc&pagination[pageSize]=1";
	const res = await getLatestDumpId(url);
	return res.data;
};

module.exports = { updateTrimuria, latestDumpData };

const { playlistInsertion } = require("./playlistInsertion");
const strotrasInsertion = require("./strotras.service");
const { sequenceStrotras } = require("./orderStrotras");

const runTasks = async () => {
	try {
		console.log("Starting strotrasInsertion");
		await strotrasInsertion(); // Ensure this completes before moving on
		console.log("Completed strotrasInsertion");

		console.log("Starting playlistInsertion");
		const bool = await playlistInsertion(); // Await the result
		console.log("Completed playlistInsertion with result:", bool);

		console.log("Starting sequenceStrotras");
		await sequenceStrotras(); // Await the completion of sequenceStrotras
		console.log("Completed sequenceStrotras");
	} catch (error) {
		console.error("Error during execution:", error.message);
	}
};

module.exports = { runTasks };

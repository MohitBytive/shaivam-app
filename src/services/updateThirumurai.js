const moment = require('moment')
const { db } = require("../db/index");
const authorOne = require("../utils/authorOne.json");
const authorTwo = require("../utils/authorName.json");
const authorThree = require("../utils/authorThree.json");

const updateQueryPro = async (updateQuery, value) => {
	// console.log(value);
	return new Promise((resolve, reject) => {
		db().run(updateQuery, value, (err, a) => {
			if (err) {
				reject(err);
			} else {
				console.log(a);
				resolve();
			}
		});
	});
};


const updateAuthors = async (db) => {
	let title;
	let autor1=0; 
	for (let a of authorOne) {
		const Num = 1;

	title = a["பதிக எண்"];
	const updateQuery = `
	    UPDATE thirumurais
	    SET authorNo = ?, orderAuthor =${autor1} 
	    WHERE title LIKE ? `;
		
	if (title) {
		const promisesArr = [];
		const res = updateQueryPro(updateQuery, [Num, `%${title}%`]);
		autor1++;
	}

};
let autor2=0;
for (let c of authorTwo) {
	const Num = 2;

	title = c["பதிக எண்"];
	const updateQuery = `
	    UPDATE thirumurais
	    SET authorNo = ?, orderAuthor =${autor2}
	    WHERE title LIKE ? `;
	if (title) {
		
		const promisesArr = [];
		const res = updateQueryPro(updateQuery, [Num, `%${title}%`]);
		autor2++;
	}
}

let autor3=0;
for (let b of authorThree) {
	const Num = 3;

	title = b["பதிக எண்"];
	console.log(title);
	if (title) {
		console.log(`SELECT * FROM thirumurais where title LIKE '%${title}%'`);

		const updateQuery = `
		UPDATE thirumurais
		SET authorNo = ?, orderAuthor =${autor3}
		WHERE title LIKE ?`;
		const promisesArr = [];

		if (title) {
			const promisesArr = [];
			const res = updateQueryPro(updateQuery, [Num, `%${title}%`]);
			autor3++;
		}
	}
}
}
module.exports = updateAuthors;

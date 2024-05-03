const sqlite3 = require("sqlite3").verbose();

const dropCategoryTableSQL = `DROP TABLE IF EXISTS category`;
const dropThirumuraiTableSQL = `DROP TABLE IF EXISTS thirumurais`;
const dropSongsTableSQL = `DROP TABLE IF EXISTS thirumurai_songs`;
const dropOdhuvarsTableSQL = `DROP TABLE IF EXISTS odhuvars`;

const dropTables = async (db) => {
   console.log(' In the drop tables '); 
    db.run(dropCategoryTableSQL);
    db.run(dropThirumuraiTableSQL);
    db.run(dropSongsTableSQL);
    db.run(dropOdhuvarsTableSQL);
};
module.exports = dropTables;

const createOdhuvarsTableSQL = `
  CREATE TABLE IF NOT EXISTS odhuvars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist TEXT,
    title TEXT,
    titleNo TEXT,
    thalamOdhuvarTamilname TEXT,
    url BLOB,
    thirumariasiriyar TEXT,
    categoryId INTEGER,
    sequence INTEGER
  )`;
module.exports = createOdhuvarsTableSQL;

const createOdhuvarsTableSQL = `
  CREATE TABLE IF NOT EXISTS odhuvars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist TEXT,
    title TEXT,
    thalamOdhuvarTamilname TEXT,
    url BLOB,
    thirumariasiriyar TEXT,
    categoryName TEXT,
    FOREIGN KEY (categoryName) REFERENCES category(name)
  )`;
  module.exports = createOdhuvarsTableSQL;
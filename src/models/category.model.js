const createCategoryTableSQL = `CREATE TABLE IF NOT EXISTS category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    content TEXT,
    prevId INTEGER NOT NULL,
    FOREIGN KEY (prevId) REFERENCES category(id)
  )`;

  module.exports = createCategoryTableSQL;
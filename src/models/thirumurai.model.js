const createThirumuraiTable = `
  CREATE TABLE IF NOT EXISTS thirumurais (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    thirumuraiUrl TEXT,
    fkTrimuria INTEGER NOT NULL,
    prevId INTEGER,
    titleNo INTEGER,
    titleS TEXT,
    pann TEXT,
    audioUrl TEXT,
    thalam TEXT,
    country TEXT,
    author TEXT, 
    refId TEXT,
    searchTitle TEXT,	
    authorNo INTEGER,
    addon TEXT,
    orderAuthor INTEGER,
    country_sequence INTEGER,
    locale TEXT,
    FOREIGN KEY (fkTrimuria) REFERENCES category(prevId),
    FOREIGN KEY (prevId) REFERENCES thirumurais(id)
  )`;

module.exports = createThirumuraiTable;

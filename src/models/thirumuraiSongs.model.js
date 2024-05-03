// -- Create the "thirumurai_songs" table
const createSongsTable = `
  CREATE TABLE IF NOT EXISTS thirumurai_songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    pann TEXT,
    audioUrl BLOB,
    thalam TEXT,
    country TEXT,
    author TEXT,
    url BLOB,
    rawSong BLOB,
    searchTitle BLOB,
    songNo INTEGER ,
    locale TEXT,
    thirumuraiId INTEGER NOT NULL,
    prevId INTEGER,
    tamilSplit BLOB,
    tamilExplanation BLOB,
    tamilNotes BLOB, 
    englishTranslation BLOB,
    hindiTranslation BLOB,
    FOREIGN KEY (thirumuraiId) REFERENCES thirumurais(id),
    FOREIGN KEY (prevId) REFERENCES thirumurai_songs(id)
  )`;

module.exports = createSongsTable;

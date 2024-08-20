const createSpecialPlaylistTableSQL = `
  CREATE TABLE IF NOT EXISTS special_playlists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    fkTrimuria INTEGER NOT NULL,
    prevId INTEGER,
    strotraTitle TEXT
  )`;

module.exports = createSpecialPlaylistTableSQL;

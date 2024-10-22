const createAudioPlaylistTable = `
    CREATE TABLE IF NOT EXISTS audio_playlists (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        album_id INTEGER, 
        "order" INTEGER,
        rawURL TEXT
        )
`;

const createShaivaSiddhantaTable = `
CREATE TABLE IF NOT EXISTS shaiva_siddhanta(
        ss_song_id TEXT,
        title_type TEXT,
        description BLOB,
        song_no DECIMAL,
        english_translation BLOB,
        tamil_split BLOB,
        tamil_explanation BLOB,
        title_name TEXT,
        shiava_siddhanta_id INTEGER,
        locale TEXT
        )`;
const createAudioAlbumTable = `
CREATE TABLE IF NOT EXISTS audio_album(  
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        album_id INTEGER,
        artist TEXT
        )`;

const createShaivaSiddhantaBooksTable = `
CREATE TABLE IF NOT EXISTS shaiva_siddhanta_books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,   
        title TEXT,
        author TEXT,
        album_id TEXT,
        shiava_siddhanta_id INTEGER,
        text_type TEXT,
        locale TEXT
)`;

module.exports = {
	createAudioAlbumTable,
	createAudioPlaylistTable,
	createShaivaSiddhantaTable,
	createShaivaSiddhantaBooksTable,
};

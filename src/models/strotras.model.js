const createStrotrasTableSQL = `
CREATE TABLE IF NOT EXISTS strotras (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        strotras_url TEXT,
        strotras_order TEXT,
        locale TEXT,
        strotras_content TEXT,
        audio_url TEXT,
        description BLOB,
        played INTEGER,
        sequence INTEGER,
        odhuvar TEXT,
        additionalInfromation TEXT,
        composer TEXT
)`;
module.exports = createStrotrasTableSQL;

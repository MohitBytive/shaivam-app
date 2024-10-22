const createVedasTable = `
    CREATE TABLE IF NOT EXISTS vedas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        vedaId INTEGER
        )
`;

const createVedaShakaTable = `
    CREATE TABLE IF NOT EXISTS veda_shakas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        shakaTitle TEXT,
        shakaId INTEGER,
        vedaId INTEGER,
        subVeda TEXT
    )
`;

const createVedaSuktamTable = `
    CREATE TABLE IF NOT EXISTS veda_suktams (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        suktamId INTEGER,
        suktamName TEXT,
        shakaId INTEGER,
        divisionOneNo INTEGER,
        divisionOneName TEXT,
        divisionTwoNo INTEGER,
        divisionTwoName TEXT,
        divisionThreeName TEXT,
        divisionThreeNo INTEGER,
        divisionFourName TEXT,
        divisionFourNo INTEGER,
        chanterName TEXT,
        rishi TEXT,
        devata TEXT,
        chandas TEXT,
        vedaId TEXT,
        title TEXT,
        titleNo TEXT,
        subVeda TEXT
)
`;

const createVedaMantraTable = `
     CREATE TABLE IF NOT EXISTS veda_mantras (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        vedaId INTEGER,
        suktamId INTEGER,
        songNo INTEGER,
        shrunkala TEXT,
        samaRdc TEXT,
        divisionFiveNo INTEGER,
        description TEXT,
        searchMantra TEXT,
        SongName TEXT
        )
`;

const createVedaChanterTable = `
       CREATE TABLE IF NOT EXISTS veda_chanters (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        url TEXT,
        name TEXT,
        title TEXT,
        sequence INTEGER,
        suktamId INTEGER
        ) 
`;

module.exports = {
	createVedasTable,
	createVedaShakaTable,
	createVedaSuktamTable,
	createVedaMantraTable,
	createVedaChanterTable,
};


let dbName = '';

const setDBName = (name) => {
    dbName = name;
};

const getDBName = () => dbName;

module.exports = { setDBName, getDBName };
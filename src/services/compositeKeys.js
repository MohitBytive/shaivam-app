const { db } = require("../db/index");

const indexQuery2 = `
CREATE INDEX comp_Fk_Pann ON  thirumurais (fkTrimuria, pann);
`;

const indexQuery1 = `
  CREATE INDEX comp_id_title ON thirumurai_songs (thirumuraiId, title);
`;

const runQuery = (query) => {
  return new Promise((resolve, reject) => {
    db().run(query, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const createComposite = async () => {
  try {
    await runQuery(indexQuery1);
    await runQuery(indexQuery2);
    console.log("Indexes created successfully");
  } catch (error) {
    console.error("Error creating indexes:", error);
  }
};

module.exports = { createComposite };

const fs= require('fs')
const {getDBName}= require('./dbName');

const deleteZIP=async()=>{
    fs.unlink(`D:\\bytiveWorkSpace\\shaivam-app\\${getDBName()}.zip`, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File is deleted.");
        }
        
    });
}

module.exports={deleteZIP}


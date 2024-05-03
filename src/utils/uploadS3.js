
const { updateTrimuria} = require("../services/saveFileStrapi");
const { s3 } = require("../services/savefileInDigi");
const fs = require("fs");
const {getDBName, setDBName}=require('./dbName')
const {deleteZIP}=require('./zipDelete')
    const uploadFile=async()=>{
		    // After the zip file is created, initiate the S3 upload
		    const fileStream = fs.createReadStream(`D:\\bytiveWorkSpace\\shaivam-app\\${getDBName()}.zip`);

		    s3.putObject({
		        Bucket: process.env.DO_SPACE_BUCKET,
		        Key: `sqlitedump/${getDBName()}.zip`,
		        Body: fileStream, // Pass the readable stream of the zip file as the Body
		        ACL: 'public-read'
		    }, (err, data) => {
		        if (err) return console.log('An error occurred in storing the file ', err);
		        console.log('Your file has been successfully uploaded');

		 updateTrimuria()
         deleteZIP();
})
    }

    module.exports={uploadFile};
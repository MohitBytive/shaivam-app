const AWS = require("aws-sdk");
const fs = require("fs");
const dotenv = require("dotenv");
const { log } = require("console");
dotenv.config();

const spaceEndpoint = new AWS.Endpoint('fra1.digitaloceanspaces.com');
const s3 = new AWS.S3({
	endpoint: spaceEndpoint,
	accessKeyId: 'DO00XCA7GKGXVRRNGA6T',
	secretAccessKey: 'jSYgefRAvVZYiNmtp8I2Mh0R+jbMcPyFUvWtivc56Yo',
});

module.exports = {
    s3
};
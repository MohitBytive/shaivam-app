const axios = require("axios");

// const headers = {
// 	headers: {
// 		Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxNDE4OTM5LCJleHAiOjE3MDQwMTA5Mzl9.77TBYWAmEq8ptdrHHozehQBlaraDWkY-Q5Po0Ic6CGg`,
// 		"Accept-Encoding": "gzip,deflate,compress",
// 	},
// };
const updateStrapiData = async (url, data) => {
	
	return await axios({
		method: 'put',
		url: `${url}`,
		data: data,
		headers: {
		  'Content-Type': 'application/json',
		  // Add any additional headers if required for authentication
		}
	  })
		.then(response => {
		  // Handle success
		  console.log(response.data);
		})
		.catch(error => {
		  // Handle error
		  console.error('Error:', error);
		});

	
	
	
};

const getLatestDumpId =async(url)=>{
    return await axios.get(url);
}

module.exports = {updateStrapiData, getLatestDumpId};

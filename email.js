const multipart = require('aws-lambda-multipart-parser');

module.exports.handler = (event, context, callback) => {
  // PARSE MULTIPART DATA FROM REQUEST
  // get content type header
  const contentType = event['headers']['content-type'] || event['headers']['Content-Type']

  // create object containing form fields and values
  let result = multipart.parse(event, true);

  // get origin URL
  let origin = event['headers']['origin'];
  let amp_source = event['queryStringParameters']['__amp_source_origin'];


  // CREATE A RESPONSE
  const lambdaResponse = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Expose-Headers": "AMP-Access-Control-Allow-Source-Origin",
      "AMP-Access-Control-Allow-Source-Origin": amp_source
    },
    body: JSON.stringify(result)
  };

  // callback(null, lambdaResponse);
  callback(null, lambdaResponse);
};

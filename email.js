module.exports.handler = (event, context, callback) => {
  // CREATE A RESPONSE
  const lambdaResponse = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Origin": "http://localhost:4444",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Expose-Headers": "AMP-Access-Control-Allow-Source-Origin",
      "AMP-Access-Control-Allow-Source-Origin": "http://localhost:4444"
    },
    body: JSON.stringify({"result": "hey"})
  };

  // callback(null, lambdaResponse);
  callback(null, lambdaResponse);
};

module.exports.handler = (event, context, callback) => {
  // CREATE A RESPONSE
  const lambdaResponse = {
    statusCode: 200,
    // headers: {},
    // body: "hey" + event.key1
    body: JSON.stringify({"result": "howdy"})

  };

  // callback(null, lambdaResponse);
  callback(null, lambdaResponse);
};

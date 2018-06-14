const Busboy = require('busboy');

module.exports.handler = (event, context, callback) => {
  // PARSE MULTIPART DATA FROM REQUEST
  // get content type header
  const contentType = event.headers['content-type'] || event.headers['Content-Type']

  // initialize a new busboy instance
  // constructor config settings: headers of the incoming request
  const busboy = new Busboy({ headers: {'content-type': contentType} });

  // create object containing form fields and values
  let result = {};
  console.log('busboy: ', busboy);

  // busboy.on('field', function(fieldname, val) {
  //   console.log('Field [' + fieldname + ']: value: ' + inspect(val));
  // });
  // busboy.on('finish', function() {
  //   console.log('Done parsing form!');
  // });

  // busboy.on('field', (fieldname, value) => {
  //   result[fieldname] = value;
  // }).on('finish', () => {
  //   resolve(result);
  // }).on('error', err => {
  //   reject(err);
  // });

  // busboy.end(event.body);

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
    body: JSON.stringify({"origin": origin, "amp_source": amp_source})
  };

  // callback(null, lambdaResponse);
  callback(null, lambdaResponse);
};

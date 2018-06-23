'use strict';
var http = require('http');
var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    var defaultClient = CloudmersiveValidateApiClient.ApiClient.instance;

    // Configure API key authorization: Apikey
    var Apikey = defaultClient.authentications['Apikey'];
    Apikey.apiKey = "c3543902-1862-498b-ba4a-256688c39435"
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Apikey.apiKeyPrefix['Apikey'] = "Token"

    var api = new CloudmersiveValidateApiClient.DomainApi()

    var domain = "cloudmersive.com"; // {String} Domain name to check, for example \"cloudmersive.com\".  The input is a string so be sure to enclose it in double-quotes.


    var callback = function (error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + data);
        }
    };
    api.domainCheck(domain, callback);

    res.end('Done\n');
}).listen(port);

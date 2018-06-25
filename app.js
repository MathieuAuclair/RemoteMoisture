require('dotenv').config();
var DOMAIN = 'weetogo.com';
var mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN, domain: DOMAIN });
var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var cors = require('cors');
var fs = require('fs');

var app = express();

app.use(cors());
app.enable('trust proxy');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
})); 

var list = mailgun.lists(`update@${DOMAIN}`);

https.createServer({
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
}, app).listen(3000);

app.get('/', function (request, response) {
	response.header('Content-type', 'text/html');
	return response.end('<h1>Hello, Secure World!</h1>');
});


app.post("/add", function(request, response){

	console.log("new email");

	var user = {
		subscribed: true,
		address: request.body.email,
		name: request.body.email,
		vars: {age: 0}
	};

	list.members().create(user, function (error, data) {
		console.log(data);
	});

	response.end();
});

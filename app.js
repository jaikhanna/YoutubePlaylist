var app = require('express')();
var http = require('http').Server(app);
var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){

	res.sendFile(__dirname + '/index.html');
});

app.post('/newVideo', function(req, res){

	var apiKey = 'AIzaSyDe0Detz_TAC_QEtnON5JrhIwsA1jCNpnE';

	request({
		uri: 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q='+req.body.artistName+'&key='+apiKey,
		}, function (error, response, body) {
		  		if (!error && response.statusCode == 200) {
		    		res.send(body);  		
		  		}
		}
	);
});

http.listen(3000, function(){
  console.log('listening on *:3000. Good to go. Check out the app now!');
});
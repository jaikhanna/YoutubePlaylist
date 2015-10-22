var app = require('express')();
var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var fs = require('fs'); 
var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res){

	// res.sendfile('index.html');
	res.sendFile(__dirname + '/index.html');
});



app.post('/newVideo', function(req, res){

	var apiKey = 'AIzaSyDe0Detz_TAC_QEtnON5JrhIwsA1jCNpnE';
	request('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q='+req.body.artistName+'&key='+apiKey, function (error, response, body) {
	  		if (!error && response.statusCode == 200) {
	    		res.send(body); // Print the google web page.
	    		
	  		}
	});


});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
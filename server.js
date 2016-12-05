var express = require('express');
var app = express();
//app.use(express.static(__dirname, '/public'));

app.get('/', function(req, res) {
	var recipes = "{{rid: 1, rname: asdf},{rid: 2, rname: asdf1}}"
	var json = JSON.parse(JSON.stringify(recipes));
	res.send(json);
});

app.listen(3000);
console.log('Listening on port 3000');
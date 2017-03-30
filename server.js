
// modules =================================================
var express        = require('express');
var app            = express();
var cors           = require('cors');
var Mongo          = require('mongodb').MongoClient,
    assert = require('assert');
var bodyParser     = require('body-parser');
var jsonParser     = bodyParser.json();
var urlencodedParser=bodyParser.urlencoded({extended: false});
var methodOverride = require('method-override');
var assert = require('assert');

// configuration ===========================================
	
var dbConfig = require('./config/db');

var port = process.env.PORT || 3000; // set our port
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

app.get('/api/recipes', function(req, res){
    Mongo.connect(dbConfig.url, function(err, db){ 
        var col_cursor = db.collection('Recipes').find().toArray(function(err, docs){
            res.json(docs);
        });
        db.close();
    });
});

//app.post('/rpi/select', function(req, res){
//   console.log(req.body);
//   res.send('success');
//});

app.post('http://localhost:5000/rpi/select', function(req,res){
    console.log(req.body);
    req.send();
});

// start api ===============================================
app.listen(port);	
console.log('Listening on port ' + port);
exports = module.exports = app;
module.exports = function(app) {

	// server routes ===========================================================
    app.get('/', function(req, res){
        console.log(req.body);
        console.log(";lkajsdf;lkajsf");
        var recipes = "{{rid: 1, sid: 1, KWT: 1, Tags: 3, Name: 'coffee', Text, ';lkajsdf;kladsjf', Sum, ';lkajsdf'}}";
        var json = JSON.parse(JSON.stringify(recipes));
        res.send(json); 
    });
    
    app.post('/api/recipe', function(req, res){
        console.log(req.body);
        res.status(200);
    });
    
    
	// WHAT IS THIS??? --- route to handle all angular requests
//	app.get('*', function(req, res) {
		//res.sendfile('./public/index.html');
//	});
    
};
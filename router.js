var path = require('path');

module.exports = function(app){

    //catch
	app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    });
}

function response(err, result, req, res){
	if(err){
		res.status(500).send(err);
	}else{
		res.status(200).json(result);
	}
}
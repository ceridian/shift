var path = require('path');

module.exports = function(app){

	app.post('/login', function(req, res){
		var obj = {
			user: req.body.user,
			token: {
				value: '12345'
			},
			settings: {
				home: 'forks'
			},
			pages: [
				{
					label: 'Forks',
					pageId: 'forks',
					icon: 'fa-code-fork'
				},
				{
					label: 'Sources',
					pageId: 'sources',
					icon: 'fa-paper-plane'
				}
			]
		};
		console.log(req.body);
		res.json(obj);
	});

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
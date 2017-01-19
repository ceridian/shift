var models = require('./models');

models.sync(function(){
    var obj = [
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
    models.Pages.create(obj, function(err, res){
        console.log(err);
        console.log(JSON.stringify(res, null, 2));
    });
});
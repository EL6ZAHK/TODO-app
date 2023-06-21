var bodyParser = require('body-parser');
var data = [{item:'Get milk'}, {item:'Walk Cat'},{item:'Kick some cats'}]
module.exports = function(app){

    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.get('/todo', function(req, res) {
        res.render('todo', {todos:data} );
    });

    app.post('/todo',urlencodedParser, function(req,res){
       data.push(req.body);
       res.json(data);
    });

    app.delete('/todo/:item', function(req,res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !==  req.params.item;
        });

        res.json(data);
    });
};
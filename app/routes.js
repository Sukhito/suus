var Item = require('./models/items');

module.exports = function(app){
    app.get('/api/items',function(req,res){
        Item.find({status : null},null,{sort:{name:1}},function(err,items){
            if(err) res.send(err);
            res.json(items);
        })
    })
}
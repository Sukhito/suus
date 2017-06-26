var Invoice = require('../model/invoice');

module.exports = function(app){
    app.get('/api/invoices',function(req,res){

        Invoice.find(req.query,function(err,invoices){
            if(err) res.send(err);
            res.json(invoices);
        })
    })
}
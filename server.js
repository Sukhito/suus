var express         =   require('express');
var cors            =   require('cors');
var app             =   express();

var mongoose        =   require('mongoose');
var bodyParser      =   require('body-parser');
var methodOverride  =   require('method-override');

var port = process.env.PORT || 8080;   

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride('X-HTTP-Method-Override'));

app.listen(port);

console.log("Server at " + port);
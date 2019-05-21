const port = process.env.PORT || 8880;

var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

// Implementation des routes
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});


//Lancement du serv
app.listen(port);
console.log("Listen on " + port);
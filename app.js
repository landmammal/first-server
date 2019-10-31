// requiring express saving in express variable
const express = require('express');

// setting app variable to an instanceof of express (accepts http methods)
const app = express();

// setting view engine
app.set('view engine', 'ejs');

// gets '/' route
app.get('/', function(req, res){
    res.render('about.ejs');
});

// starting up our server to listen for http request
app.listen(3000, function(){
    console.log('Server is runing on port 3000...')
});
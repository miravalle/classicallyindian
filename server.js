var express = require('express');
var minifier = require('minifier');
var app = express();

var input = './src/js';

minifier.on('error', function(err) {
    console.warn(err);
});

minifier.minify(input, {});

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


app.listen(process.env.PORT || 3000, function() {
    console.log('classicallyindian server listening on port %s', this.address().port)
});

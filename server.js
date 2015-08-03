var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', require('./routes/index.js'))

app.listen(process.env.PORT || 3000, function() {
    console.log('classicallyindian server listening on port %s', this.address().port)
});

var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


app.listen(process.env.PORT || 3000, function() {
    console.log('classicallyindian server listening on port %s', this.address().port)
});

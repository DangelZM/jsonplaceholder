var express  = require('express');
var app      = express();
var Users = require('./users.json');
var UsersArray = Users.reduce(function(memo, item){
    memo[item.id] = item;
    return memo;
}, []);

app.get('/users', function (req, res, next) {
    res.send(Users);
});

app.get('/users/:id', function (req, res, next) {
    res.send(UsersArray[req.params.id]);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err);
});

app.listen(3000);
console.log("App listening on port 3000");
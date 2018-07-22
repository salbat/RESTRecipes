
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

//Handle GET requests
app.get('/ajaxcall', function (req, res) {
    var data = {
        contactId: 1,
        firstName: 'Saleem',
        lastName: 'Albatati',
        email: 'Saleem@gmail.com'
    };
    res.send(data);
});

//Handle POST requests
app.post('/ajaxcall', function(req, res){ 
    var store = '';

    req.on('data', function(data) {
        store += data;
    });

    req.on('end', function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(store);
    })
});

//Handle PUT requests
app.put('/ajaxcall/:contactId', function(req, res){ 
    var store = '';

    req.on('data', function(data) {
        store += data;
    });

    req.on('end', function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(store);
    })
});

//Handle DELETE requests
app.delete('/ajaxcall/:contactId', function(req, res){ 
    res.send({message: 'Record deleted'});
});

app.listen(8000);
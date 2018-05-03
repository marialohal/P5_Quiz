const readline = require('readline');
const express = require('express');
const path = require('path');

var app = express();

app.get('/credits', function(req, res){
    res.send('<html>' +
        '<body>' +
        '<form method="get" action="/check">' +
        '</form>'
        '</body>')
})

app.get('/quizzes', function (req,res) {


})
app.listen(3000);







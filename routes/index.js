var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const {models} = require ("../models");

/* GET home page. */
router.get('/',function(req,res,next){
    res.render('index',{title:'MARIA'});
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'MARIA'});
});

router.get('/quizzes',(req, res,next){
    models.quiz.findAll()
        .then(quizzes =>{
            res.render('quizzes', {quizzes})
    })
    .catch(err => {
        res.locals.message=err.message;
        res.status(404);
        res.reedner('error');
    });
});

module.exports = router;

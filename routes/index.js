var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const {models} = require ('../models/index');

/* GET home page. */
router.get('/',function(req,res,next){
    res.render('index',{title:'Quiz'});
});

router.get('/credits', function(req, res, next) {
  res.render('credits');
});

router.get('/quizzes',function(req, res,next){
    models.quiz.findAll()
        .then(quizzes =>{
            var JSONQuizzes =JSON.stringify(quizzes);
            res.render('quizzes', {quizzes: JSONQuizzes});
    })
    .catch(error => {
        console.log(error);
    })
});

module.exports = router;

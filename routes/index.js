var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there',
    user: 'Femi',
    date: new Date()
  },
  {
    text: 'Hi World',
    user: 'Warith',
    date: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form')
})

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.messageUser, date: new Date()})
  res.redirect('/')
})
module.exports = router;

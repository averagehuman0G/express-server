var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  bodyParser.json();
  next();
});

app.get('/tf/athletes/standards', (req, res) => {
  res.json([
    { id: 12345, firstName: 'Ani', lastName: 'William', gender: 1, doB: '2003-08-13', age: 16, className: 'Class 2 M' },
    {
      id: 22222,
      firstName: 'Harrison',
      lastName: 'William',
      gender: 1,
      doB: '2002-04-01',
      age: 14,
      className: 'Class 3 M',
    },
    {
      id: 33333,
      firstName: 'Jowayne',
      lastName: 'Bartley',
      gender: 1,
      doB: '2001-12-24',
      age: 16,
      className: 'Class 1 M',
    },
    { id: 4444, firstName: 'Corey', lastName: 'Daley', gender: 1, doB: '2002-03-25', age: 14, className: 'Class 3 M' },
  ]);
});
//
// app.post("/post", (req, res) => {
// 	console.log(req.body);
// });

app.listen(8080);
console.log('server is running');

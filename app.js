const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')



app.use(morgan('dev'));

// app.set('view engine', 'html');
// app.engine('html', nunjucks.render);
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('Response')
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

// app.listen(3000, function() {
//   console.log('listening on port 3000');
// })

//app.use('/', routes);
module.exports = app;
var express = require('express');
var app = express();
var router = express.Router();

/**
 * Get a basic message from queersicht application
 */
router.get('/queersicht', function (req, res) {
  res.json({ message: 'My first message' });
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use('/api', router);
app.listen(8081);
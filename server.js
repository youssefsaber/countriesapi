const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const errorHandler = require('./helpers/errorHandler');
const countries = require('./controllers/api.controller');

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// routes
app.get('/', (req, res, next) => res.json({ status: 'OK', code: 200 }));
app.use('/countries', countries);

// Question 4 , Slots machine
app.use('/slots', require('./controllers/slots.controller'));

app.get('*', (req, res, next) =>
  res.json({
    status: 404,
    message: 'route not found'
  })
);

//global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, err => {
  console.log(`app is listening on port ${PORT}`);
});

module.exports = app;

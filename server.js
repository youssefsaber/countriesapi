const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');

const config = require('./config');
const errorHandler = require('./helpers/errorHandler');
const countries = require('./controllers/api.controller');

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());

app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res, next) => res.json({ status: 'OK', code: 200 }));
app.use('/countries', countries);

// Question 4 , Slots machine
app.use('/slots', require('./controllers/slots.controller'));

//global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, err => {
  console.log(`app is listening on port ${PORT}`);
});

module.exports = app;

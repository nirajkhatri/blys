const express = require('express');

const verificationRouter = require('./routes/verification.routes');

const app = express();

app.use(express.json());

app.use('/', verificationRouter);

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Not found',
  });
});

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { port, host } = require('./config');
const mockBlacklist = require('./mock/blacklist');
const mockCheck = require('./mock/check');

app.use(morgan('combined'));
app.use(cors());

app.get('/blacklist', async (req, res) => {
  const { countMinimum, maxAgeInDays, confidenceMinimum } = req.query;
  if (!countMinimum || !maxAgeInDays || !confidenceMinimum) {
    return res.status(400).send('Invalid input.');
  }
  return res.status(200).send(mockBlacklist);
});

app.get('/check', async (req, res) => {
  const { ipAddress } = req.query;
  if (!ipAddress) {
    return res.status(400).send('IP address required.');
  }
  return res.status(200).send(mockCheck);
});

app.listen(port, host, () => console.log(`App listening on port ${port}!`));

module.exports = app;

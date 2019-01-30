const express = require('express');
const request = require('request-promise');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { port, host, apiBaseUrl, apiKey } = require('../server/config');

app.use(morgan('combined'));
app.use(cors());

app.get('/blacklist', async (req, res) => {
  const { countMinimum, maxAgeInDays, confidenceMinimum } = req.query;
  if (!countMinimum || !maxAgeInDays || !confidenceMinimum) {
    return res.status(400).send('Invalid input.');
  }
  try {
    const requestOptions = {
      uri: `${apiBaseUrl}/blacklist`,
      qs: { countMinimum, maxAgeInDays, confidenceMinimum },
      headers: {
        Key: apiKey,
        Accept: 'application/json'
      },
      json: true
    };
    const blacklist = await request(requestOptions);
    return res.status(200).send(blacklist);
  } catch (e) {
    console.log('Error fetching blacklist', `HTTP ${e.statusCode}`, e.message);
    return res.status(500).send('Server error');
  }
});

app.get('/check', async (req, res) => {
  const { ipAddress } = req.query;
  if (!ipAddress) {
    return res.status(400).send('IP address required.');
  }
  try {
    const requestOptions = {
      uri: `${apiBaseUrl}/check`,
      qs: { ipAddress },
      headers: {
        Key: apiKey,
        Accept: 'application/json'
      },
      json: true
    };
    const check = await request(requestOptions);
    return res.status(200).send(check);
  } catch (e) {
    console.log('Error fetching IP check', `HTTP ${e.statusCode}`, e.message);
    return res.status(500).send('Server error');
  }
});

app.listen(port, host, () => console.log(`App listening on port ${port}!`));

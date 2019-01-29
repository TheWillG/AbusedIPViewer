require('dotenv').config()

const port = 3000;
const host = process.env.HOST;
const mock = process.env.MOCK;
const apiBaseUrl = process.env.API_BASE_URL;
const apiKey = process.env.API_KEY;

module.exports = {
  port, host, mock, apiBaseUrl, apiKey
}
